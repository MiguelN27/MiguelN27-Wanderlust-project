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
    <section className="filter-bar-shell" role="region" aria-label="Experience filters">
      <div className="filter-bar">
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

      <div className="quick-filter-row" aria-label="Suggested filters">
        <span>Free cancellation</span>
        <span>Top rated</span>
        <span>Small groups</span>
        <span>Family friendly</span>
      </div>
    </section>
  );
}
