import Link from "next/link";
import { experiencesData } from "../../../data/experiences";

export default async function ExperienceDetailPage({ params }) {
  const routeParams = await params;
  const experienceId = Number(routeParams.id);
  const experience = experiencesData.find((item) => item.id === experienceId);

  if (!experience) {
    return (
      <section className="detail-page">
        <h1>Experience not found</h1>
        <p>The experience you are looking for does not exist.</p>
        <Link href="/experiences">Back to explorer</Link>
      </section>
    );
  }

  return (
    <article className="detail-page">
      <img src={experience.imageURL} alt={experience.title} className="detail-image" />
      <div className="detail-content">
        <p className="eyebrow">
          {experience.destination} · {experience.category}
        </p>
        <h1>{experience.title}</h1>
        <p>{experience.description}</p>

        <div className="detail-meta">
          <p>
            <strong>Rating:</strong> {experience.rating}
          </p>
          <p>
            <strong>Price:</strong> From ${experience.price}
          </p>
        </div>

        <Link href="/experiences">Back to explorer</Link>
      </div>
    </article>
  );
}
