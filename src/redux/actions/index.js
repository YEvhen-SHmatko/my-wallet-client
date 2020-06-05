export const withOutPayload = type => ({
  type,
});
export const withPayload = (type, payload) => ({
  type,
  payload,
});
