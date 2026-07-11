"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SearchBar from "./SearchBar";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (pathname === "/experiences" && typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setQuery(params.get("q") || "");
    } else {
      setQuery("");
    }
  }, [pathname]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const trimmedQuery = query.trim();
    const target = trimmedQuery ? `/experiences?q=${encodeURIComponent(trimmedQuery)}` : "/experiences";
    router.push(target);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="header-brand-row">
          <div className="logo-block">
            <Link href="/" className="site-logo" aria-label="Wanderlust home">
              Wanderlust
            </Link>
            <span className="logo-subtitle">Experiences</span>
          </div>

          <nav aria-label="Primary navigation" className="header-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "is-active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {pathname !== "/experiences" ? (
          <SearchBar
            value={query}
            onChange={setQuery}
            onSubmit={handleSearchSubmit}
            placeholder="Find activities and destinations"
            showLeadingChip={false}
            className="header-search"
          />
        ) : null}
      </div>
    </header>
  );
}
