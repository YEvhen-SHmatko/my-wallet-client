import { nanoid } from 'nanoid';

const mapper = data => {
  const percent = 100 / Math.max(...data.map(item => item.value));
  return data
    .map(item => {
      return {
        ...item,
        id: nanoid(),
        height: +(item.value * percent).toFixed(0),
      };
    })
    .sort((a, b) => {
      if (a.height < b.height) {
        return 1;
      }
      if (a.height > b.height) {
        return -1;
      }
      if (a.height === b.height) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
      }
      return 0;
    });
};
export default mapper;
