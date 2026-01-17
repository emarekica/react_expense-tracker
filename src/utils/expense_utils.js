import { filterConfig } from "./filterConfig";

export function getSortedExpenses(expenses, filterValue) {
  const sorted = [...expenses]; // avoids mutating 'expense' array
  const sortFn = filterConfig[filterValue]?.sortFn;

  if (sortFn) sorted.sort(sortFn);

  return sorted;
}

  export function getTotalExpense(expenses) {
    return expenses.reduce((sum, expense) => sum + expense.price, 0);
}