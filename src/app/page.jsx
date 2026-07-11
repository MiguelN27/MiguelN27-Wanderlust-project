"use client";

import { useMemo } from "react";
import Link from "next/link";
import { experiencesData } from "../data/experiences";
import { useAppState } from "../lib/app-state";
import ActivityCarouselSection from "../components/ActivityCarouselSection";

export default function HomePage() {
  const { favoriteIds, toggleFavorite } = useAppState();

  const destinations = useMemo(() => {
    const uniqueDestinations = [...new Set(experiencesData.map((item) => item.destination))];
    return uniqueDestinations.slice(0, 6);
  }, []);

  return (
    <div className="page-stack">
      <section className="hero hero-home">
        <p className="hero-kicker">Wanderlust Labs</p>
        <h1>Discover and book things to do around the world.</h1>
        <p>
          Search curated adventures, compare top-rated experiences, and save your favorite plans in
          one place.
        </p>

        <Link className="cta-button" href="/experiences">
          Browse all experiences
        </Link>
      </section>

      <section className="destinations-strip">
        <div className="section-heading-row">
          <h2 className="section-title">Things to do wherever you are going</h2>
        </div>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <Link
              key={destination}
              href={`/experiences?destination=${encodeURIComponent(destination)}`}
              className="destination-pill"
            >
              {destination}
            </Link>
          ))}
        </div>
      </section>

      <ActivityCarouselSection
        title="Go beyond the guidebook"
        items={experiencesData.slice(0, 9)}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />

      <ActivityCarouselSection
        title="Adventures to plan your trip around"
        items={experiencesData.slice(9, 18)}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
