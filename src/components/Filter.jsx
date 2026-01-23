export default function Filter({ value, onChange, isOpen, onToggle }) {
  return (
    <select
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        onToggle(false);
      }}
      name="filters"
      id="expense-filter"
      aria-label="Sort expenses"
      style={{ display: isOpen ? 'inline-block' : 'none' }}
    >
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="ascending">Ascending price</option>
      <option value="descending">Descending price</option>
    </select>
  );
}
