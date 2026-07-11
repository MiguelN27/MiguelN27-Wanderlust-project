import Link from "next/link";

export default function HeaderNavActions() {
  return (
    <div className="header-nav-actions">
      <Link href="/favorites" aria-label="Wishlist">
        <span aria-hidden="true">WL</span>
        <span>Wishlist</span>
      </Link>
      <button type="button" aria-label="Cart">
        <span aria-hidden="true">CT</span>
        <span>Cart</span>
      </button>
      <button type="button" aria-label="Locale and currency">
        <span aria-hidden="true">GL</span>
        <span>EN/USD</span>
      </button>
      <Link href="/profile" aria-label="Profile">
        <span aria-hidden="true">ME</span>
        <span>Profile</span>
      </Link>
    </div>
  );
}
