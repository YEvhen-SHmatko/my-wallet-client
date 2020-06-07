export const setLS = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error(error);
  }
};
export const getLS = async key => {
  try {
    const items = await localStorage.getItem(key);
    return items;
  } catch (error) {
    throw new Error(error);
  }
};
