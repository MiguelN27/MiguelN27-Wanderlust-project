import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ExperienceCard({ experience, isFavorite, onToggleFavorite }) {
  return (
    <article className="experience-card">
      <div className="experience-media">
        <img src={experience.imageURL} alt={experience.title} loading="lazy" />
        <FavoriteButton isFavorite={isFavorite} onToggle={() => onToggleFavorite(experience.id)} />
      </div>

      <div className="experience-content">
        <p className="eyebrow">
          {experience.destination} · {experience.category}
        </p>
        <h3>{experience.title}</h3>
        <p>{experience.description}</p>

        <div className="experience-meta">
          <span>⭐ {experience.rating}</span>
          <span>From ${experience.price}</span>
        </div>

        <Link href={`/experiences/${experience.id}`}>View details</Link>
      </div>
    </article>
  );
}
