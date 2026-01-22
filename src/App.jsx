import { useState } from "react";

import Card from "./components/Card.jsx";
import ExpenseItem from "./components/ExpenseItem.jsx";
import Filter from "./components/Filter.jsx";

import { getSortedExpenses, getTotalExpense } from "./utils/expense_utils.js";
import filterIcon from "./assets/filter_icon.png";
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
      <Card aria-live="polite">
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
    return <p className="message" role="status">You have no expenses yet!</p>;
  }

  function renderFilter() {
    return (
      <>
        <button
          className="filter"
          onClick={() => setIsFilterOpen((open) => !open)}
          aria-label="Toggle expense filter"
          aria-expanded={isFilterOpen}
          aria-controls="expense-filter"
          type="button">
            {!isFilterOpen && (
              <img src={filterIcon} alt="Filter icon"/>
            )}
        </button>

        {isFilterOpen && (
          <Filter value={filterValue} onChange={setFilterValue} />
        )}
      </>
    );
  }

  function renderExpenseSum() {
    return (
      <div className="total-expense">
        <p className="total-expense" aria-live="polite">Total expense: {totalExpense}</p>
        {expenses.length >= 2 && renderFilter()}
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>Random expense calculator</h1>
        <button
          onClick={getRandomExpense}
          aria-label="Add a random expense"
          type="button">+
        </button>
      </header>
      <main>
        {hasExpenses && renderExpenseSum()}
        {hasExpenses ? renderCard() : renderMessage()}
      </main>
    </>
  );
}

export default App;
