"use client";

import PaginatedExperienceGrid from "./PaginatedExperienceGrid";

export default function ActivityCarouselSection({ title, items, favoriteIds, onToggleFavorite }) {
  return (
    <section className="activity-carousel-section">
      <div className="section-heading-row">
        <h2 className="section-title">{title}</h2>
      </div>

      <PaginatedExperienceGrid
        items={items}
        favoriteIds={favoriteIds}
        onToggleFavorite={onToggleFavorite}
        pageSize={30}
      />
    </section>
  );
}
