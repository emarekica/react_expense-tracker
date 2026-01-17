import { useState } from "react";

import Card from "./components/Card.jsx";
import ExpenseItem from "./components/ExpenseItem.jsx";
import Filter from "./components/Filter.jsx";

import { items } from "./data.jsx";

function App() {
  const [expenses, setExpenses] = useState([]);

  // states for Filter
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("newest");

  // ❗️
  const hasExpenses = expenses.length > 0;
  const filteredExpenses = sortOrder
  ? expenses.filter(e => e.item === sortOrder)
  : expenses;

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

  // ❗️
  const totalExpense = expenses.reduce((sum, expense) => {
    return sum + expense.price;
  }, 0);

  function getRandomExpense() {
    const newExpense = {
      item: randomExpense.getRandomItem(),
      price: randomExpense.getAmount(),
      date: randomExpense.getDate(),
    };

    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  }

  function renderCard() {
    return (
      <Card>
        {/* ❗️ */}
        {filteredExpenses.map((expense, index) => (
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
        {/* // ❗️ */}
        <button type="button" onClick={() => setIsSortOpen((open) => !open)}></button>
        {isSortOpen && (
          <Filter value={sortOrder} onChange={setSortOrder} />
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
