export const filterConfig = {
  newest: {
    label: "Newest",
    sortFn: (a, b) => b.date - a.date
  },
  oldest: {
    label: "Oldest",
    sortFn: (a, b) => a.date - b.date
  },
  ascending: {
    label: "Ascending price",
    sortFn: (a, b) => a.price - b.price
  },
  descending: {
    label: "Descending price",
    sortFn: (a, b) => b.price - a.price,
  },
};
