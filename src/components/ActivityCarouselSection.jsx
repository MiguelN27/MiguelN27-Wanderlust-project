"use client";

import { useMemo, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import CarouselNavButton from "./CarouselNavButton";

export default function ActivityCarouselSection({ title, items, favoriteIds, onToggleFavorite }) {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3;

  const pages = useMemo(() => {
    const chunks = [];

    for (let index = 0; index < items.length; index += pageSize) {
      chunks.push(items.slice(index, index + pageSize));
    }

    return chunks;
  }, [items]);

  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < pages.length - 1;
  const visibleItems = pages[pageIndex] || [];

  return (
    <section className="activity-carousel-section">
      <div className="section-heading-row">
        <h2>{title}</h2>
        <div className="section-controls">
          <CarouselNavButton
            direction="left"
            onClick={() => setPageIndex((current) => Math.max(current - 1, 0))}
            disabled={!canGoPrev}
          />
          <CarouselNavButton
            direction="right"
            onClick={() => setPageIndex((current) => Math.min(current + 1, pages.length - 1))}
            disabled={!canGoNext}
          />
        </div>
      </div>

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
    </section>
  );
}
