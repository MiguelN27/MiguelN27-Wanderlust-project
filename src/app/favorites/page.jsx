"use client";

import Link from "next/link";
import PaginatedExperienceGrid from "../../components/PaginatedExperienceGrid";
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
        <PaginatedExperienceGrid
          items={favorites}
          favoriteIds={favoriteIds}
          onToggleFavorite={toggleFavorite}
          pageSize={30}
        />
      )}
    </section>
  );
}
