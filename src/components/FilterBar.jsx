"use client";

export default function FilterBar({
  category,
  destination,
  categories,
  destinations,
  onCategoryChange,
  onDestinationChange,
}) {
  return (
    <div className="filter-bar" role="region" aria-label="Experience filters">
      <label>
        Category
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="">All categories</option>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        Destination
        <select value={destination} onChange={(event) => onDestinationChange(event.target.value)}>
          <option value="">All destinations</option>
          {destinations.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
