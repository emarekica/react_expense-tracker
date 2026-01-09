import { useState } from "react";

import Card from "./components/Card.jsx";
import ExpenseItem from "./components/ExpenseItem.jsx";

function App() {
  const [expenses, setExpenses]= useState([]);

  const items = ["Book", "Notebook", "Pen", "Color pencil", "Eraser", "Bookmark", "Marker", "Ruler"];

  const randomExpense = {
    getRandomItem: () => items[Math.floor(Math.random() * items.length)],
    getAmount: () => Math.floor(Math.random() * 100) + 1,
    getDate: () => Date.now(),
  }

  function getRandomExpense() {
    const newExpense = {
      item: randomExpense.getRandomItem(),
      price: randomExpense.getAmount(),
      date: randomExpense.getDate(),
    }

    setExpenses(prevExpenses => [newExpense, ...prevExpenses]);
  };


  return (
    <>
      <header>
        <h2>Add random expense</h2>
        <button onClick={getRandomExpense}>+</button>
      </header>
      <Card>
        {expenses.map((expense, index) => (
              <ExpenseItem key={index}
                item={expense.item}
                price={expense.price}
                date={expense.date}/>
            )
          )
        }
      </Card>
    </>
  );
}

export default App;
