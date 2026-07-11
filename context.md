# WANDERLUST EXPERIENCES

Wanderlust Labs is a travel-tech startup building a platform where users can discover and save curated experiences around the world, from street-food tours in Bangkok to sailing trips in the Adriatic.

## What Is Requested for the Page?

A frontend multi-page application built with React/Next.js where users can browse, search, and filter experiences without reloading the page.

## Required Page Structure

- **`/`** — Home: hero section with a call-to-action button that navigates to `/experiences`
- **`/experiences`** — Explorer: full list of experience cards with a search bar and at least two filters (category and destination). The search and active filters must be reflected in the URL as query parameters and must pre-fill the inputs on load.
- **`/experiences/[id]`** — Detail: full information for one experience, fetched from the local dataset by ID.
- **`/favorites`** — Favorites: list of experiences the user has marked as favorite (stored in component state for now).
- **`/profile`** — Profile: a static page with a mock user profile and a summary of their saved favorites count.

## Components

1. **Navbar**
	- The top navigation bar containing the logo, search, and user account actions.
	- A sticky top-level header used across the site to house branding, global search, and primary navigation actions (wishlist, cart, locale, profile).

2. **SearchBar**
	- The rounded search input with an inline "Search" button.
	- A prominent search control allowing users to find destinations and activities. Reusable in the header and potentially on landing/hero sections.

3. **FilterBar**
	- A horizontal bar of filter controls that sits directly beneath the `SearchBar`, letting users refine activity results by date, category, price, duration, rating, and other facets.
	- On this GetYourGuide-style marketplace, it turns the broad search into a targeted result set without leaving the page.

4. **HeaderNavActions**
	- The group of icon-labeled actions on the right (Wishlist, Cart, EN/USD $, Profile).
	- A cluster of icon + label buttons used for quick access to account and utility functions. Typically composed inside `SiteHeader`.

5. **ActivityCarouselSection**
	- A titled section (e.g., "Go beyond the guidebook", "Adventures to plan your trip around") containing a horizontally scrollable row of activity cards.
	- A reusable content section that groups related activity cards under a heading with left/right navigation controls (the circular chevron buttons).

6. **CarouselNavButton**
	- The circular chevron button (right-side arrow) used to page through the carousel.
	- A directional control to scroll a carousel forward/backward. Disabled at the start/end of the list.

7. **ExperienceCard**
	- The core repeated unit: image, favorite button, badge, location/category, title, details, rating, and price.
	- Displays a single bookable activity/tour in a grid or carousel. The most reused component on the page.

8. **FavoriteButton**
	- The circular heart button overlaid on the top-right of each card image.
	- A toggle control for saving an activity to the user's wishlist. Manages a favorited/unfavorited visual state.

## Search Behavior and Filter Logic

- The search should filter experiences whose title matches the search term.
- Use a case-insensitive regex for search, for example: `/term/i`.
- Filtering by category and destination should work independently and stack with the search.
- All active filters and the search term must be stored as URL query parameters using `useSearchParams` and `usePathname` from Next.js.
- On page load, read query params from the URL and pre-fill the search bar and filter inputs with their values.

## Favorites

- A heart icon on each card should toggle the experience in/out of the user's favorites list.
- Favorites are kept in a `useState` at the top level and passed down as props where needed.

## UI Features

- App must be responsive (mobile-first).
- The explorer grid should show a "no results found" message when filters produce zero matches.
- The `Navbar` component must be present on all pages and show active link styles using `usePathname`.

# Dataset and State

- All state must live in React's built-in `useState` and be passed via props or custom hooks.

## Design references
The next pages are UI and Design references for all accross the page:
![Guide for Main Page](../MiguelN27-Wanderlust-project/src/img/guide-for-main-page.png)
![Guide for Detail Page](../MiguelN27-Wanderlust-project/src/img/guide-for-detail-page.png)
![Experience Guiding Page](../MiguelN27-Wanderlust-project/src/img/experience-guiding-page.png)

- Color Scheme:
    - Background color: whitesmoke #F2F2F2
	- Primary color: Sober red #E42E36
	- Secondary color: Smooth gray #BFB6B0
	- Accent color: #D85B5B
- Take the images mentioned on this are as a reference for the organization and look of the UI that and then apply it with the measures of the components
