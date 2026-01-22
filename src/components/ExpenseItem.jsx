export default function ExpenseItem({item, price, date}) {
  const isLuxury = price > 50 ? "luxury" : "";
  const formattedDate = date.toLocaleDateString();

  return(
    <li className={`expense-item ${isLuxury}`}>
      <div>
        <span>{item}</span>
        <data>€{price}</data>
      </div>
      <time dateTime={date.toISOString()}>
        {formattedDate}
      </time>
    </li>
  );
}
