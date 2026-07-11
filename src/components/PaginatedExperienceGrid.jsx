"use client";

import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";

export default function PaginatedExperienceGrid({
  items,
  favoriteIds,
  onToggleFavorite,
  pageSize = 30,
}) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [items, pageSize]);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <>
      <div className="experience-grid">
        {visibleItems.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isFavorite={favoriteIds.includes(experience.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {hasMore ? (
        <div className="view-more-row">
          <button
            type="button"
            className="cta-button view-more-button"
            onClick={() => setVisibleCount((current) => current + pageSize)}
          >
            View more
          </button>
        </div>
      ) : null}
    </>
  );
}
