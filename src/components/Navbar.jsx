"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import HeaderNavActions from "./HeaderNavActions";

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
          <Link href="/" className="site-logo">
            Wanderlust
          </Link>

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

        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={handleSearchSubmit}
          placeholder="Find activities and destinations"
        />

        <HeaderNavActions />
      </div>
    </header>
  );
}
