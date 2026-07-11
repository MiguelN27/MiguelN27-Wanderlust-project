"use client";

import { useAppState } from "../../lib/app-state";

export default function ProfilePage() {
  const { favorites } = useAppState();

  return (
    <section className="profile-page">
      <header className="profile-hero">
        <div className="profile-avatar" aria-hidden="true">
          MN
        </div>
        <div>
          <h1>Traveler Profile</h1>
          <p className="eyebrow">@explore.with.mia</p>
          <p>
            Adventure-focused traveler interested in food culture, hidden nature trails, and
            local-led city stories.
          </p>
        </div>
      </header>

      <div className="profile-summary">
        <article>
          <h2>Saved Favorites</h2>
          <p>{favorites.length}</p>
        </article>
        <article>
          <h2>Preferred Category</h2>
          <p>Culture & Food</p>
        </article>
        <article>
          <h2>Next Destination</h2>
          <p>Lisbon, Portugal</p>
        </article>
        <article>
          <h2>Travel Style</h2>
          <p>Small groups and local-led activities</p>
        </article>
      </div>
    </section>
  );
}
