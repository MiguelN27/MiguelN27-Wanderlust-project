export default function CarouselNavButton({ direction = "right", onClick, disabled }) {
  return (
    <button
      type="button"
      className="carousel-nav-button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}
