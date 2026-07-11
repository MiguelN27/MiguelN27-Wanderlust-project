"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { experiencesData } from "../data/experiences";

const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

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
