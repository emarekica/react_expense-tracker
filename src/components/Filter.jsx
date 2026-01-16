export default function Filter({value, onChange}) {
    return (
      <select
        // ❗️
        value={value ?? ""}
        onChange={(e) =>
          onChange(e.target.value === "" ? null : e.target.value)
        }
      >
        <option value="">All</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="ascending">Ascending price</option>
        <option value="descending">Descending price</option>
      </select>
    );
  };
