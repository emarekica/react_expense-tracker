import { useState } from "react";

import Card from "./components/Card.jsx";
import ExpenseItem from "./components/ExpenseItem.jsx";
import Filter from "./components/Filter.jsx";

import { items } from "./data.jsx";

function App() {

  // STATES
  const [expenses, setExpenses] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("newest");

  // FILTER
  const filterConfig = {
    newest: { label: "Newest", sortFn: (a, b) => b.date - a.date },
    oldest: { label: "Oldest", sortFn: (a, b) => a.date - b.date },
    ascending: { label: "Ascending price", sortFn: (a, b) => a.price - b.price },
    descending: { label: "Descending price", sortFn: (a, b) => b.price - a.price },
  };

  // EXPENSES
  const hasExpenses = expenses.length > 0;

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

  const totalExpense = expenses.reduce((sum, expense) => {
    return sum + expense.price;
  }, 0);

  const sortedExpenses = [...expenses]; // avoids mutating 'expenses' array
  const sortFunction = filterConfig[filterValue]?.sortFn;
  if (sortFunction) sortedExpenses.sort(sortFunction);

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
        {/* ❗️ */}
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
