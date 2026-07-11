import Link from "next/link";
import { useRouter } from "next/navigation";
import FavoriteButton from "./FavoriteButton";

export default function ExperienceCard({ experience, isFavorite, onToggleFavorite }) {
  const router = useRouter();
  const isTopPick = experience.rating >= 4.8;
  const detailsHref = `/experiences/${experience.id}`;

  const handleCardClick = (event) => {
    const interactiveElement = event.target.closest("a, button, input, select, textarea, label");
    if (interactiveElement) {
      return;
    }
    router.push(detailsHref);
  };

  const handleCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      router.push(detailsHref);
    }
  };

  return (
    <article
      className="experience-card"
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-label={`Open details for ${experience.title}`}
    >
      <div className="experience-media">
        <img src={experience.imageURL} alt={experience.title} loading="lazy" />
        {isTopPick ? <span className="experience-badge">Likely to sell out</span> : null}
        <FavoriteButton isFavorite={isFavorite} onToggle={() => onToggleFavorite(experience.id)} />
      </div>

      <div className="experience-content">
        <p className="eyebrow">{experience.destination}</p>
        <h3>{experience.title}</h3>
        <p className="experience-subtext">{experience.category} experience</p>

        <div className="experience-meta">
          <span>⭐ {experience.rating}</span>
          <span>From ${experience.price}</span>
        </div>

        <Link className="card-link" href={detailsHref} tabIndex={-1} aria-hidden="true">
          View details
        </Link>
      </div>
    </article>
  );
}
