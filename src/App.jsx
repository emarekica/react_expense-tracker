import { useState } from "react";

import Card from "./components/Card.jsx";
import ExpenseItem from "./components/ExpenseItem.jsx";

function App() {
  const [expenses, setExpenses] = useState([]);

  const hasExpenses = expenses.length > 0;

  const items = [
    "Book",
    "Notebook",
    "Pen",
    "Color pencil",
    "Eraser",
    "Bookmark",
    "Marker",
    "Ruler",
  ];

  const randomExpense = {
    getRandomItem: () => items[Math.floor(Math.random() * items.length)],
    getAmount: () => Math.floor(Math.random() * 100) + 1,
    getDate: () => new Date().toLocaleDateString(),
  };

  // sum = accumulator, expense = currentExpense, 0 = initial value
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
        {expenses.map((expense, index) => (
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
    return (
      <p className="message">You have no expenses yet!</p>
    );
  }

  function renderExpenseSum() {
    return (
      <p className="total-expense">Total expense: {totalExpense}</p>
    )
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
