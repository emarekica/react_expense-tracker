import Card from "./components/Card.jsx";
import ExpenseItem from "./components/ExpenseItem.jsx";

function App() {
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
