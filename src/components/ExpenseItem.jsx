export default function ExpenseItem({item, price, date}) {
  return(
    <li className="expense-item">
      <div>
        <span>{item}</span>
        <span>{price}</span>
      </div>
      <span>{date}</span>
    </li>
  );
}
