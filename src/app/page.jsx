"use client";

import Link from "next/link";
import { experiencesData } from "../data/experiences";
import { useAppState } from "../lib/app-state";
import ActivityCarouselSection from "../components/ActivityCarouselSection";

export default function HomePage() {
  const { favoriteIds, toggleFavorite } = useAppState();

  return (
    <div className="page-stack">
      <section className="hero">
        <p className="hero-kicker">Wanderlust Labs</p>
        <h1>Go beyond the guidebook with unforgettable local experiences.</h1>
        <p>
          Discover curated adventures, cultural walks, and culinary escapes across the globe.
        </p>
        <Link className="cta-button" href="/experiences">
          Explore experiences
        </Link>
      </section>

      <ActivityCarouselSection
        title="Adventures to plan your trip around"
        items={experiencesData.slice(0, 9)}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />

      <ActivityCarouselSection
        title="Go beyond the guidebook"
        items={experiencesData.slice(9, 18)}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
