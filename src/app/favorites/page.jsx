"use client";

import ExperienceCard from "../../components/ExperienceCard";
import { useAppState } from "../../lib/app-state";

export default function FavoritesPage() {
  const { favorites, favoriteIds, toggleFavorite } = useAppState();

  return (
    <section className="page-stack">
      <h1>Your Favorites</h1>

      {favorites.length === 0 ? (
        <p className="no-results">You have no saved experiences yet.</p>
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
