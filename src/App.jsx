import Card from "./components/Card.jsx";
import ExpenseItem from "./components/ExpenseItem.jsx";

function App() {
  const items = ["Book", "Notebook", "Pen", "Color pencil", "Eraser", "Bookmark", "Marker", "Ruler"];

  const randomExpense = {
    getRandomItem: () => items[Math.floor(Math.random() * items.length)],
    getAmount: () => Math.floor(Math.random() * 100) + 1,
    getDate: () => Date.now(),
  }

  function getRandomExpense() {
    const expense = {
      item: randomExpense.getRandomItem(),
      price: randomExpense.getAmount(),
      date: randomExpense.getDate(),
    }
    return expense;
  };


  return (
    <>
      <header>
        <h2>Add random expense</h2>
        <button>+</button>
      </header>
      <Card>
        <ExpenseItem
          item="Book"
          price="€15"
          date="02.01.2026."/>
        <ExpenseItem
          item="Pencil"
          price="€5"
          date="04.01.2026."/>
        <ExpenseItem
          item="Notebook"
          price="€10"
          date="08.01.2026."/>
      </Card>
    </>
  );
}

export default App;
