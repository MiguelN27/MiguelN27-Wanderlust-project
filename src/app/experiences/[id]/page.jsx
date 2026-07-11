import Link from "next/link";
import { experiencesData } from "../../../data/experiences";

export default async function ExperienceDetailPage({ params }) {
  const routeParams = await params;
  const experienceId = Number(routeParams.id);
  const experience = experiencesData.find((item) => item.id === experienceId);

  if (!experience) {
    return (
      <section className="detail-page">
        <div className="detail-content">
          <h1>Experience not found</h1>
          <p>The experience you are looking for does not exist.</p>
          <Link className="card-link" href="/experiences">
            Back to explorer
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="detail-page">
      <header className="detail-header">
        <p className="eyebrow">
          {experience.destination} / {experience.category}
        </p>
        <h1>{experience.title}</h1>
      </header>

      <section className="detail-gallery" aria-label="Experience images">
        <img src={experience.imageURL} alt={experience.title} className="detail-image detail-image-main" />
        <img src={experience.imageURL} alt={experience.title} className="detail-image" />
        <img src={experience.imageURL} alt={experience.title} className="detail-image" />
        <img src={experience.imageURL} alt={experience.title} className="detail-image" />
        <img src={experience.imageURL} alt={experience.title} className="detail-image" />
      </section>

      <section className="detail-layout">
        <div className="detail-content">
          <p>{experience.description}</p>

          <div className="detail-highlights">
            <article>
              <h2>Rating</h2>
              <p>{experience.rating} / 5</p>
            </article>
            <article>
              <h2>Category</h2>
              <p>{experience.category}</p>
            </article>
            <article>
              <h2>Destination</h2>
              <p>{experience.destination}</p>
            </article>
          </div>

          <div className="detail-meta">
            <p>
              Includes guided activity, support from local hosts, and flexible cancellation for many
              departures.
            </p>
          </div>

          <Link className="card-link" href="/experiences">
            Back to explorer
          </Link>
        </div>

        <aside className="booking-card">
          <p className="eyebrow">Reserve this experience</p>
          <p className="booking-price">From ${experience.price}</p>
          <p className="booking-copy">Secure your spot now and finalize details later.</p>
          <button type="button" className="cta-button">
            Reserve
          </button>
          <small>No payment required today</small>
        </aside>
      </section>

      <section className="detail-footer-links">
        <Link href="/favorites">View wishlist</Link>
        <Link href="/profile">Go to profile</Link>
      </section>
    </article>
  );
}
