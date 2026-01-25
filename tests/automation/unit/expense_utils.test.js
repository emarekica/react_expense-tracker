/**
 * Unit tests for expense utility functions.
 *
 * Covers:
 *  - Total expense calculation
 *  - Sorting by all filter types
 *  - Edge cases: empty array, single item, negative and decimal prices, duplicate values
 *  - Immutability of input arrays
 *  - Deterministic behavior
 */

import { getSortedExpenses, getTotalExpense } from "../../../src/utils/expense_utils.js";

describe("getTotalExpense", () => {
  test("returns 0 for empty expense list", () => {
    expect(getTotalExpense([])).toBe(0);
  });

  test("calculates total correctly for multiple expenses", () => {
    const expenses = [
      { price: 10 },
      { price: 25 },
      { price: 5 },
    ];
    expect(getTotalExpense(expenses)).toBe(40);
  });

  test("handles single expense", () => {
    expect(getTotalExpense([{ price: 99 }])).toBe(99);
  });

  test("handles negative and decimal expense prices", () => {
    const expenses = [
      { price: 50 },
      { price: -20 },
      { price: 10.5 },
    ];
    expect(getTotalExpense(expenses)).toBeCloseTo(40.5);
  });
});

describe("getSortedExpenses", () => {
  const baseExpenses = [
    { item: "A", price: 30, date: new Date("2024-01-01") },
    { item: "B", price: 10, date: new Date("2024-03-01") },
    { item: "C", price: 20, date: new Date("2024-02-01") },
  ];

  test("returns a new array (does not mutate original)", () => {
    const original = [...baseExpenses];
    getSortedExpenses(baseExpenses, "ascending");
    expect(baseExpenses).toEqual(original);
  });

  test("sorts by newest date", () => {
    const result = getSortedExpenses(baseExpenses, "newest");
    expect(result.map(e => e.item)).toEqual(["B", "C", "A"]);
  });

  test("sorts by oldest date", () => {
    const result = getSortedExpenses(baseExpenses, "oldest");
    expect(result.map(e => e.item)).toEqual(["A", "C", "B"]);
  });

  test("sorts by ascending price", () => {
    const result = getSortedExpenses(baseExpenses, "ascending");
    expect(result.map(e => e.price)).toEqual([10, 20, 30]);
  });

  test("sorts by descending price", () => {
    const result = getSortedExpenses(baseExpenses, "descending");
    expect(result.map(e => e.price)).toEqual([30, 20, 10]);
  });

  test("returns original list for invalid filter", () => {
    const result = getSortedExpenses(baseExpenses, "invalid");
    expect(result).toEqual(baseExpenses);
  });

  test("handles single-item list", () => {
    const single = [{ price: 42, date: new Date() }];
    expect(getSortedExpenses(single, "newest")).toEqual(single);
  });

  test("handles empty list", () => {
    expect(getSortedExpenses([], "newest")).toEqual([]);
  });

  test("handles multiple items with same price and date (stable sort)", () => {
    const expenses = [
      { item: "X", price: 50, date: new Date("2024-01-01") },
      { item: "Y", price: 50, date: new Date("2024-01-01") },
    ];
    const result = getSortedExpenses(expenses, "ascending");
    expect(result).toEqual(expenses); // order stays the same
  });
});
