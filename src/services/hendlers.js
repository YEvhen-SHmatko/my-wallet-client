import { nanoid } from 'nanoid';
import moment from 'moment';
import 'moment/locale/ru';

export const thisDate = period => {
  const data = moment(new Date());
  data.locale('ru');
  if (period && period.year) data.year(period.year);
  if (period && period.month) data.month(period.month - 1);
  return data;
};

export const TwoDigits = value => {
  const result = +value >= 10 ? +value : `0${+value}`;
  return result;
};

export const getAmountByMonth = (data, { year, month }) => {
  const per = `${year}-${TwoDigits(month)}`;
  const amount = data
    .filter(item => item.date.includes(per))
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
