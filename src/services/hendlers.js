import { nanoid } from 'nanoid';
import moment from 'moment';
import 'moment/locale/ru';

export const srcIcon = name => {
  switch (name) {
    case 'Продукты':
      return './images/svg/diet.svg';
    case 'Транспорт':
      return './images/svg/car.svg';
    case 'Хобби':
      return './images/svg/clay.svg';
    case 'Алкоголь':
      return './images/svg/cocktail.svg';
    case 'Здоровье':
      return './images/svg/hands-holding-heart.svg';
    case 'Все для дома':
      return './images/svg/couch.svg';
    case 'Техника':
      return './images/svg/tools.svg';
    case 'Коммуналка,Связь':
      return './images/svg/invoice.svg';
    case 'Образование':
      return './images/svg/book.svg';
    case 'Развлечение':
      return './images/svg/kite.svg';
    default:
      return './images/svg/ufo.svg';
  }
};
export const transformMoney = (money, minus = false, currency = true) => {
  const curr = currency ? 'грн' : '';
  const num = money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  if (minus === null) {
    return `${num} ${curr}`;
  }
  return minus ? `- ${num} ${curr}` : `+ ${num} ${curr}`;
};

export const thisDate = period => {
  if (typeof period === 'string') {
    const data = moment(period);
    data.locale('ru');
    return data;
  }
  const data = moment(new Date());
  if (period && period.year) data.year(period.year);
  if (period && period.month) data.month(period.month - 1);
  return data;
};

export const TwoDigits = value => {
  const result = +value >= 10 ? +value : `0${+value}`;
  return result;
};
export const dataByDate = (data, { year, month }) => {
  return data.filter(item => item.date.includes(`${year}-${TwoDigits(month)}`));
};
export const CostByPeriodAndCategories = (period, costs, categories) => {
  const sum = data =>
    data.reduce((a, { amount }) => {
      return a + amount;
    }, 0);
  const result = categories.reduce((acc, category) => {
    const allCosts = dataByDate(costs, period).filter(cost => {
      if (cost.product.category.name === category.name) {
        return true;
      }
      return false;
    });
    const amount = allCosts.length > 0 ? sum(allCosts) : 0;
    acc.push({ id: nanoid(), name: category.name, allCosts, amount });
    return acc;
  }, []);
  return result;
};
export const getAmountByMonth = (data, { year, month }) => {
  const amount = dataByDate(data, { year, month })
    .map(item => item.amount)
    .reduce((acc, value) => acc + value, 0);
  const result = {
    id: nanoid(),
    month: thisDate({ month }).format('MMMM'),
    year: +thisDate({ year }).format('YYYY'),
    amount,
  };
  return result;
};
export const getAmountByPeriod = ({ data, startPeriod, viewOld }) => {
  let { year, month } = startPeriod;
  const result = [];
  for (let i = 1; i <= viewOld; i += 1) {
    if (month === 1) {
      year -= 1;
      month = 12;
    }
    if (month === 12) {
      year += 1;
      month = 1;
    }
    result.push(getAmountByMonth(data, { year, month }));
    month -= 1;
  }
  return result;
};
