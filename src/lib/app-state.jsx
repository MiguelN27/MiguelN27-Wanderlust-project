"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { experiencesData } from "../data/experiences";

const AppStateContext = createContext(null);
const FAVORITES_STORAGE_KEY = "wanderlust-favorite-ids";
const validExperienceIds = new Set(experiencesData.map((experience) => experience.id));

export const AppStateProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [hasHydratedFavorites, setHasHydratedFavorites] = useState(false);

  useEffect(() => {
    try {
      const storedFavoriteIds = window.localStorage.getItem(FAVORITES_STORAGE_KEY);

      if (!storedFavoriteIds) {
        setHasHydratedFavorites(true);
        return;
      }

      const parsedFavoriteIds = JSON.parse(storedFavoriteIds);

      if (Array.isArray(parsedFavoriteIds)) {
        setFavoriteIds(parsedFavoriteIds.filter((id) => validExperienceIds.has(id)));
      }
    } catch {
      window.localStorage.removeItem(FAVORITES_STORAGE_KEY);
    } finally {
      setHasHydratedFavorites(true);
    }
  }, []);

  useEffect(() => {
    if (!hasHydratedFavorites) {
      return;
    }

    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds, hasHydratedFavorites]);

  const toggleFavorite = (id) => {
    setFavoriteIds((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    );
  };

  const value = useMemo(
    () => ({
      favoriteIds,
      toggleFavorite,
      favorites: experiencesData.filter((experience) => favoriteIds.includes(experience.id)),
    }),
    [favoriteIds],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppState must be used inside AppStateProvider");
  }

  return context;
};
