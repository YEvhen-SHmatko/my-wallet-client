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
          ctx.font = Chart.helpers.fontString(
            Chart.defaults.global.defaultFontSize,
            Chart.defaults.global.defaultFontStyle,
            Chart.defaults.global.defaultFontFamily,
          );
          ctx.fillStyle = Chart.defaults.global.defaultFontColor;
          if (isMobile) {
            ctx.textAlign = 'left';
            chartInstance.aspectRatio =
              chartInstance.width < 500
                ? chartInstance.width < 400
                  ? chartInstance.width < 300
                    ? 0.4
                    : 0.5
                  : 0.6
                : 0.7;
            this.data.datasets.forEach(function(dataset, i) {
              const meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                data = `${`${costFormat(dataset.data[index])} ${currency}`}`;
                ctx.fillText(
                  bar._view.label,
                  20,
                  bar._model.y - bar._view.height,
                );
                ctx.fillText(
                  data,
                  bar._model.x -
                    (data.length * Chart.defaults.global.defaultFontSize) / 2 <
                    bar._view.label.length *
                      Chart.defaults.global.defaultFontSize
                    ? bar._view.label.length *
                        Chart.defaults.global.defaultFontSize
                    : bar._model.x -
                        (data.length * Chart.defaults.global.defaultFontSize) /
                          2,
                  bar._model.y - bar._view.height,
                );
              });
            });
          } else {
            ctx.textAlign = 'center';
            chartInstance.height = 428;
            this.data.datasets.forEach(function(dataset, i) {
              const meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                data = `${costFormat(dataset.data[index])} ${currency}`;
                ctx.fillText(
                  data,
                  bar._model.x,
                  bar._model.y - Chart.defaults.global.defaultFontSize / 2,
                );
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
