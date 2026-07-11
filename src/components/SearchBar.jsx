"use client";

export default function SearchBar({ value, onChange, onSubmit, placeholder = "Search experiences..." }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search experiences"
      />
      <button type="submit">Search</button>
    </form>
  );
}
