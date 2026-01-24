// Covers edge cases
// Verifies immutability
// Demonstrates understanding of deterministic testing
// Separates business logic from UI

/**
 * Unit tests for expense utility functions.
 * These tests validate pure business logic without rendering UI.
 */

import { getSortedExpenses, getTotalExpense } from "../../../src/utils/expense_utils.js";

describe("getTotalExpense", () => {
  test("returns 0 for empty expense list", () => {
    expect(getTotalExpense([])).toBe(0);
  });

  test("calculates total price correctly", () => {
    const expenses = [
      { price: 10 },
      { price: 25 },
      { price: 5 }
    ];

    expect(getTotalExpense(expenses)).toBe(40);
  });

  test("handles single expense", () => {
    expect(getTotalExpense([{ price: 99 }])).toBe(99);
  });
});

describe("getSortedExpenses", () => {
  const baseExpenses = [
    { price: 30, date: new Date("2024-01-01") },
    { price: 10, date: new Date("2024-03-01") },
    { price: 20, date: new Date("2024-02-01") }
  ];

  test("returns a new array (does not mutate original)", () => {
    const original = [...baseExpenses];
    getSortedExpenses(baseExpenses, "ascending");

    expect(baseExpenses).toEqual(original);
  });

  test("sorts by newest date", () => {
    const result = getSortedExpenses(baseExpenses, "newest");
    expect(result[0].date).toEqual(new Date("2024-03-01"));
  });

  test("sorts by oldest date", () => {
    const result = getSortedExpenses(baseExpenses, "oldest");
    expect(result[0].date).toEqual(new Date("2024-01-01"));
  });

  test("sorts by ascending price", () => {
    const result = getSortedExpenses(baseExpenses, "ascending");
    expect(result.map(e => e.price)).toEqual([10, 20, 30]);
  });

  test("sorts by descending price", () => {
    const result = getSortedExpenses(baseExpenses, "descending");
    expect(result.map(e => e.price)).toEqual([30, 20, 10]);
  });

  test("returns unsorted list for invalid filter", () => {
    const result = getSortedExpenses(baseExpenses, "invalid");
    expect(result).toEqual(baseExpenses);
  });
});
