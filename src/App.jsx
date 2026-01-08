import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <header>
        <h2>Add random expense</h2>
        <button>+</button>
      </header>
      <Card>
        <li className="expense-item">
          <div>
            <span>Book</span>
            <span>€15</span>
          </div>
          <span>02.01.2026.</span>
        </li>
        <li className="expense-item">
          <div>
            <span>Pencil</span>
            <span>€5</span>
          </div>
          <span>04.01.2026.</span>
        </li>
        <li className="expense-item">
          <div>
            <span>Notebook</span>
            <span>€10</span>
          </div>
          <span>08.01.2026.</span>
        </li>
      </Card>
    </>
  );
}

export default App;
