import _ from "lodash";

export const paginate = (totalItems, pageNumber, pageSize) => {
  const startingIndex = (pageNumber - 1) * pageSize;
  return _(totalItems).slice(startingIndex).take(pageSize).value();
};
