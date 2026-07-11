"use client";

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Search experiences...",
  buttonLabel = "Search",
  showLeadingChip = true,
  className = "",
}) {
  return (
    <form className={`search-bar ${className}`.trim()} onSubmit={onSubmit}>
      <div className="search-input-wrap">
        {showLeadingChip ? (
          <span className="search-icon" aria-hidden="true">
            Search
          </span>
        ) : null}
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-label="Search experiences"
        />
      </div>
      <button type="submit">{buttonLabel}</button>
    </form>
  );
}
