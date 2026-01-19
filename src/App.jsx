import { useState } from "react";

import Card from "./components/Card.jsx";
import ExpenseItem from "./components/ExpenseItem.jsx";
import Filter from "./components/Filter.jsx";

import { getSortedExpenses, getTotalExpense } from "./utils/expense_utils.js";

import { items } from "./data.js";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("newest");

  const hasExpenses = expenses.length > 0;

  const totalExpense = getTotalExpense(expenses);
  const sortedExpenses = getSortedExpenses(expenses, filterValue);

  const randomExpense = {
    getRandomItem: () => items[Math.floor(Math.random() * items.length)],
    getAmount: () => Math.floor(Math.random() * 100) + 1,
    // getDate: () => new Date().toLocaleDateString(),
    getDate: () => {
      const start = 0;
      const end = Date.now();
      return new Date(start + Math.random() * (end - start));
    },
  };

  function getRandomExpense() {
    const newExpense = {
      item: randomExpense.getRandomItem(),
      price: randomExpense.getAmount(),
      date: randomExpense.getDate(),
    };

    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  }

  // HELPERS
  function renderCard() {
    return (
      <Card>
        {sortedExpenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            item={expense.item}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </Card>
    );
  }

  function renderMessage() {
    return <p className="message">You have no expenses yet!</p>;
  }

  function renderFilter() {
    return (
      <>
        <button
          className="filter"
          onClick={() => setIsFilterOpen((open) => !open)}
          aria-label="Open filter menu">
          </button>
        {isFilterOpen && (
          <Filter value={filterValue} onChange={setFilterValue} />
        )}
      </>
    );
  }

  function renderExpenseSum() {
    return (
      <>
        <p className="total-expense">Total expense: {totalExpense}</p>
        {expenses.length >= 2 && renderFilter()}
      </>
    );
  }

  return (
    <>
      <header>
        <h2>Random expense calculator</h2>
        <button onClick={getRandomExpense}>+</button>
      </header>
      {hasExpenses && renderExpenseSum()}

      {hasExpenses ? renderCard() : renderMessage()}
    </>
  );
}

export default App;
