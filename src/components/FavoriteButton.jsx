"use client";

export default function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      type="button"
      className={`favorite-button ${isFavorite ? "is-active" : ""}`}
      onClick={onToggle}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
}
