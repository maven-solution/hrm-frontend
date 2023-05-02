import moment from "moment";

export const fullYear = (date) => {
  return moment(date).format("MMM Do YYYY");
};
export const dateFormat = (date) => {
  return moment(date).format("YYYY-MM-DD");
};
