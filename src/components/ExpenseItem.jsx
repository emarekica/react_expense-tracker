export default function ExpenseItem({item, price, date}) {
  const isLuxury = price > 50 ? "luxury" : "";

  return(
    <li className={`expense-item ${isLuxury}`}>
      <div>
        <span>{item}</span>
        <span>€{price}</span>
      </div>
      <span>{date}</span>
    </li>
  );
}
