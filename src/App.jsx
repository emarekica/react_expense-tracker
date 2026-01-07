function App() {
  return (
    <>
      <h1>Random expenses tracker</h1>
      <ul>
        <li>
          <div className="expenseItem">
            <span>Book</span>
            <span>€15</span>
            <span>02.01.2026.</span>
          </div>
        </li>
        <li>
          <div className="expenseItem">
            <span>Pencil</span>
            <span>€5</span>
            <span>04.01.2026.</span>
          </div>
        </li>
        <li>
          <div className="expenseItem">
            <span>Notebook</span>
            <span>€10</span>
            <span>08.01.2026.</span>
          </div>
        </li>
      </ul>
      <button>Add random expense</button>
    </>
  );
}

export default App;
