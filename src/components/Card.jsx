export default function Card({children, ...props}) {
  return(
    <ul
      {...props}
      aria-label="expense-list">
        {children}
    </ul>
  )
}