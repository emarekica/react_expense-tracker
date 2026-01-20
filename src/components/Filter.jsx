export default function Filter({ value, onChange }) {
  return (
    <select defaultValue={value} onChange={(e) => onChange(e.target.value)} name="filters">
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="ascending">Ascending price</option>
      <option value="descending">Descending price</option>
    </select>
  );
}
