/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import Styles from './ExpensesChartBySpecificCategory.module.css';
import './barRadius';
import Wrapper from '../Wrapper';

Chart.defaults.global.defaultFontColor = '#52555f';
Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';
Chart.defaults.global.defaultFontSize = 11;
Chart.defaults.global.defaultFontStyle = '400';

const mapper = json => {
  return json
    .sort((a, b) => b.amount - a.amount)
    .reduce(
      (acc, cost) => {
        acc.data.push(cost.amount);
        acc.labels.push(cost.product.name);
        return acc;
      },
      { data: [], labels: [] },
    );
};

const bgColor = (lenght, firstColor, secondColor) => {
  const backgroundColor = [];
  for (let i = 1; i <= lenght; i += 1) {
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
  const CTX = document.getElementById(dom).getContext('2d');
  const myChart = () =>
    new Chart(CTX, {
      type: isMobile ? 'horizontalBar' : 'bar',
      data: {
        labels: res.labels,
        datasets: [
          {
            data: res.data,
            datalabels: {
              display: true,
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

            ctx.fillStyle = Chart.defaults.global.defaultFontColor;
            if (isMobile) {
              const fontSize = window.innerWidth < 768 ? 11 : 13;
              ctx.font = Chart.helpers.fontString(
                fontSize,
                Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily,
              );
              ctx.textAlign = 'left';
              const myC = () => {
                if (chartInstance.width < 760) {
                  return { aspectRatio: 0.538, maxBarThickness: 16 };
                }
                return { aspectRatio: 4.2, maxBarThickness: 26 };
              };

              chartInstance.aspectRatio = myC().aspectRatio;
              this.data.datasets.forEach((dataset, i) => {
                const meta = chartInstance.controller.getDatasetMeta(i);
                this.data.datasets[0].maxBarThickness = myC().maxBarThickness;
                // this.data.datasets[0].barPercentage = 0.9;
                // this.data.datasets[0].categoryPercentage = 0.6;
                meta.data.forEach((bar, index) => {
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
                  ctx.fillText(v.label, 20, m.y - v.height + fontSize / 2 - 2);
                  ctx.fillText(
                    cost,
                    xTextPosition(),
                    m.y - v.height + fontSize / 2 - 2,
                  );
                });
              });
            } else {
              ctx.font = Chart.helpers.fontString(
                Chart.defaults.global.defaultFontSize,
                Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily,
              );
              ctx.textAlign = 'center';
              const aspectRatio = () => {
                if (chartInstance.width < 760) {
                  return 1.666;
                }
                return 1.765;
              };
              chartInstance.aspectRatio = aspectRatio();
              // this.data.datasets[0].maxBarThickness = 30;
              this.data.datasets[0].barPercentage = 0.9;
              this.data.datasets[0].categoryPercentage = 0.6;
              this.data.datasets.forEach((dataset, i) => {
                const meta = chartInstance.controller.getDatasetMeta(i);
                meta.controller._config.barPercentage = 0.9;
                meta.controller._config.categoryPercentage = 0.5;
                meta.data.forEach((bar, index) => {
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
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: true,
                min: 0,
              },
            },
          ],
          yAxes: [
            {
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
  myChart();
};

export default class ExpensesChartBySpecificCategory extends Component {
  static defaultProps = {
    isMobile: false,
  };

  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.shape({
          name: PropTypes.string,
        }).isRequired,
        amount: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
    isMobile: PropTypes.bool,
    currency: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    const { data, isMobile, currency } = this.props;
    if (prevProps.data !== data) {
      renderChart({
        dom: 'canvas',
        data,
        isMobile,
        currency,
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <section className={Styles.section}>
          <canvas className={Styles.canvas} id="canvas" />
        </section>
      </Wrapper>
    );
  }
}
