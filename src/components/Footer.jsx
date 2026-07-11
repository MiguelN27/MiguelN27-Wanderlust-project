import Link from "next/link";

const discoveryGroups = [
  {
    title: "Top attractions worldwide",
    links: ["Colosseum", "Sagrada Familia", "Vatican Museums", "Eiffel Tower"],
  },
  {
    title: "Top destinations",
    links: ["Lake Como", "Park Guell", "Louvre Museum", "Anne Frank House"],
  },
  {
    title: "Top countries to visit",
    links: ["Italy", "Spain", "France", "Japan"],
  },
  {
    title: "Top attraction categories",
    links: ["Museums", "Nature", "Cruises", "Food tours"],
  },
];

const footerColumns = [
  {
    title: "Support",
    links: ["Contact", "Legal Notice", "Privacy Policy", "Cancellation options"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Blog", "Press"],
  },
  {
    title: "Work with us",
    links: ["As a partner", "As a creator", "As an affiliate", "For developers"],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-discovery">
        <div className="footer-discovery-inner">
          {discoveryGroups.map((group) => (
            <section key={group.title} className="footer-discovery-group">
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((item) => (
                  <li key={item}>
                    <Link href="/experiences">{item}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-main-inner">
          <section className="footer-controls" aria-label="Regional settings and apps">
            <h2>Language</h2>
            <select defaultValue="en-US" aria-label="Language selector">
              <option value="en-US">English (United States)</option>
              <option value="es-ES">Espanol (Espana)</option>
            </select>

            <h2>Currency</h2>
            <select defaultValue="USD" aria-label="Currency selector">
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
            </select>

            <h2>Mobile</h2>
            <div className="store-buttons">
              <Link href="/" aria-label="Get it on Google Play" className="store-button">
                Google Play
              </Link>
              <Link href="/" aria-label="Download on the App Store" className="store-button">
                App Store
              </Link>
            </div>
          </section>

          {footerColumns.map((column) => (
            <section key={column.title} className="footer-link-column">
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((item) => (
                  <li key={item}>
                    <Link href="/">{item}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="footer-legal">
          <p>© 2026 Wanderlust Experiences</p>
          <div className="footer-legal-links">
            <Link href="/">Terms</Link>
            <Link href="/">Privacy</Link>
            <Link href="/">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}