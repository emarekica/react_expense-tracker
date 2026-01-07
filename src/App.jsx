function App() {
  return (
    <>
      <h3>Random expenses tracker</h3>
      <ul>
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
      </ul>
      <button>Add random expense</button>
    </>
  );
}

export default App;
