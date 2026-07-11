"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ExperienceCard from "./ExperienceCard";
import { experiencesData } from "../data/experiences";
import { useAppState } from "../lib/app-state";
import { matchesSearch } from "../lib/filter-utils";

export default function ExperiencesExplorer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { favoriteIds, toggleFavorite } = useAppState();

  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [destination, setDestination] = useState(searchParams.get("destination") || "");

  useEffect(() => {
    setSearch(searchParams.get("q") || "");
    setCategory(searchParams.get("category") || "");
    setDestination(searchParams.get("destination") || "");
  }, [searchParams]);

  const categories = useMemo(
    () => [...new Set(experiencesData.map((experience) => experience.category))].sort(),
    [],
  );

  const destinations = useMemo(
    () => [...new Set(experiencesData.map((experience) => experience.destination))].sort(),
    [],
  );

  const applyParams = (nextValues) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(nextValues).forEach(([key, value]) => {
      if (value && value.trim()) {
        params.set(key, value.trim());
      } else {
        params.delete(key);
      }
    });

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    applyParams({ q: search, category, destination });
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    applyParams({ q: search, category: value, destination });
  };

  const handleDestinationChange = (value) => {
    setDestination(value);
    applyParams({ q: search, category, destination: value });
  };

  const filteredExperiences = experiencesData.filter((experience) => {
    const matchesCategory = category ? experience.category === category : true;
    const matchesDestination = destination ? experience.destination === destination : true;
    const titleMatches = matchesSearch(experience.title, search);

    return matchesCategory && matchesDestination && titleMatches;
  });

  return (
    <section className="page-stack explorer-page">
      <SearchBar
        value={search}
        onChange={setSearch}
        onSubmit={handleSearchSubmit}
        placeholder="Search by experience title"
        showLeadingChip={false}
        className="explorer-search"
      />

      <FilterBar
        category={category}
        destination={destination}
        categories={categories}
        destinations={destinations}
        onCategoryChange={handleCategoryChange}
        onDestinationChange={handleDestinationChange}
      />

      {filteredExperiences.length === 0 ? (
        <p className="no-results">No results found for your current filters.</p>
      ) : (
        <div className="experience-grid">
          {filteredExperiences.map((experience) => (
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
