"use client";

import { useEffect, useMemo, useState } from "react";
import CarouselNavButton from "./CarouselNavButton";
import ExperienceCard from "./ExperienceCard";

export default function ActivityCarouselSection({ title, items, favoriteIds, onToggleFavorite }) {
  const pageSize = 4;
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
  }, [items]);

  const pageCount = useMemo(() => Math.max(1, Math.ceil(items.length / pageSize)), [items]);
  const startIndex = pageIndex * pageSize;
  const visibleItems = items.slice(startIndex, startIndex + pageSize);
  const hasMultiplePages = items.length > pageSize;

  const handleNextPage = () => {
    setPageIndex((currentIndex) => (currentIndex + 1) % pageCount);
  };

  return (
    <section className="activity-carousel-section">
      <div className="section-heading-row">
        <h2 className="section-title">{title}</h2>
        <div className="section-controls">
          <CarouselNavButton
            direction="right"
            onClick={handleNextPage}
            disabled={!hasMultiplePages}
          />
        </div>
      </div>

      <div className="category-carousel-track" role="list" aria-label={`${title} experiences`}>
        {visibleItems.map((experience) => (
          <div key={experience.id} role="listitem" className="category-carousel-item">
            <ExperienceCard
              experience={experience}
              isFavorite={favoriteIds.includes(experience.id)}
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
