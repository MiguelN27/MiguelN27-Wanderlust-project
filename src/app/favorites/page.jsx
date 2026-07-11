"use client";

import Link from "next/link";
import ExperienceCard from "../../components/ExperienceCard";
import { useAppState } from "../../lib/app-state";

export default function FavoritesPage() {
  const { favorites, favoriteIds, toggleFavorite } = useAppState();

  return (
    <section className="page-stack">
      <header className="panel-header">
        <p className="hero-kicker">Wishlist</p>
        <h1>Your saved experiences</h1>
        <p>{favorites.length} experiences currently in your list.</p>
      </header>

      {favorites.length === 0 ? (
        <div className="no-results">
          <p>You have no saved experiences yet.</p>
          <Link className="cta-button" href="/experiences">
            Explore experiences
          </Link>
        </div>
      ) : (
        <div className="experience-grid">
          {favorites.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favoriteIds.includes(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
