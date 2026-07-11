import Link from "next/link";

export default function HeaderNavActions() {
  return (
    <div className="header-nav-actions">
      <Link href="/favorites">Wishlist</Link>
      <button type="button" aria-label="Cart">Cart</button>
      <button type="button" aria-label="Locale and currency">EN/USD</button>
      <Link href="/profile">Profile</Link>
    </div>
  );
}
