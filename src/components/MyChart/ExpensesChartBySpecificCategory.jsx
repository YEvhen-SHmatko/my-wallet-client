/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import Styles from './ExpensesChartBySpecificCategory.module.css';
import Wrapper from '../Wrapper';
import './barRadius';

Chart.defaults.global.defaultFontColor = '#52555f';
Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';
Chart.defaults.global.defaultFontSize = 11;
Chart.defaults.global.defaultFontStyle = '400';

const mapper = json => {
  return json
    .sort((a, b) => b.cost - a.cost)
    .reduce(
      (acc, product) => {
        acc.data.push(product.cost);
        acc.labels.push(product.name);
        return acc;
      },
      { data: [], labels: [] },
    );
};

const bgColor = (lenght, firstColor, secondColor) => {
  const backgroundColor = [];
  for (let i = 1; i <= lenght; i++) {
    if (i % 3 === 1) {
      backgroundColor.push(firstColor);
    } else {
      backgroundColor.push(secondColor);
    }
  }
  return backgroundColor;
};

const costFormat = cost =>
  cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const renderChart = ({ dom, data, isMobile = false, currency }) => {
  const backgroundColor = bgColor(data.length, '#ee7428cc', '#edcbbbcc');
  const res = mapper(data);
  const ctx = document.getElementById(dom).getContext('2d');

  const myChart = new Chart(ctx, {
    type: isMobile ? 'horizontalBar' : 'bar',
    data: {
      labels: res.labels,
      datasets: [
        {
          data: res.data,
          datalabels: {
            display: true,
            formatter(context, chart_obj) {
              return 'chart_obj.dataIndex';
            },
          },
          backgroundColor,
        },
      ],
    },
    options: {
      hover: {
        animationDuration: 0,
      },
      animation: {
        duration: 1,
        onComplete() {
          const chartInstance = this.chart;
          const { ctx } = chartInstance;
          let data;

          ctx.fillStyle = Chart.defaults.global.defaultFontColor;
          if (isMobile) {
            console.log('ctx', ctx);
            const fontSize = window.innerWidth < 768 ? 11 : 13;
            ctx.font = Chart.helpers.fontString(
              fontSize,
              Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily,
            );
            ctx.textAlign = 'left';
            const aspectRatio = () => {
              if (chartInstance.width < 500) {
                return 0.6;
              }
              if (chartInstance.width < 400) {
                return 0.5;
              }
              if (chartInstance.width < 300) {
                return 0.4;
              }
              return 0.7;
            };
            chartInstance.aspectRatio = aspectRatio();
            this.data.datasets.forEach(function(dataset, i) {
              const meta = chartInstance.controller.getDatasetMeta(i);

              meta.data.forEach(function(bar, index) {
                const cost = `${costFormat(dataset.data[index])} ${currency}`;
                const m = bar._model;
                const v = bar._view;
                const spase = m.x - (cost.length * fontSize) / 2;
                const xTextPosition = () => {
                  if (spase < v.label.length * fontSize) {
                    return v.label.length * fontSize;
                  }
                  return spase;
                };
                ctx.fillText(v.label, 20, m.y - v.height);
                ctx.fillText(cost, xTextPosition(), m.y - v.height);
              });
            });
          } else {
            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontSize,
              Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily,
            );
            ctx.textAlign = 'center';
            chartInstance.height = 428;
            this.data.datasets.forEach(function(dataset, i) {
              const meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                const cost = `${costFormat(dataset.data[index])} ${currency}`;
                const m = bar._model;
                const yTextPosition =
                  m.y - Chart.defaults.global.defaultFontSize / 2;
                ctx.fillText(cost, m.x, yTextPosition);
              });
            });
          }
        },
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      maintainAspectRatio: true,
      scales: {
        xAxes: [
          {
            maxBarThickness: 40,
            barPercentage: 1,
            categoryPercentage: 0.65,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: true,
            },
          },
        ],
        yAxes: [
          {
            barPercentage: 0.4,
            categoryPercentage: 0.55,
            gridLines: {
              display: true,
              drawBorder: false,
            },
            display: true,
            ticks: {
              display: false,
              min: 0,
              stepSize: 1000,
            },
          },
        ],
      },
    },
  });
};

export default class ExpensesChartBySpecificCategory extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    isMobile: PropTypes.bool,
    currency: PropTypes.string.isRequired,
  };

  componentDidMount() {
    renderChart({
      dom: 'canvas',
      data: this.props.data,
      isMobile: this.props.isMobile,
      currency: this.props.currency,
    });
  }

  render() {
    return (
      <Wrapper>
        <section className={Styles.chart}>
          <canvas className={Styles.canvas} id="canvas" />
        </section>
      </Wrapper>
    );
  }
}
