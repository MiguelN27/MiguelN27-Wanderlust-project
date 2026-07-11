# Wanderlust Project Study Summary

This document explains, in a simple way, what was built from the start of the project until the full multi-page app was completed.

## 1. Starting Point

- The project started from a basic boilerplate template.
- Dependencies were installed and the project was configured to run with Next.js.
- The app structure was organized into reusable folders:
  - `src/app` for pages
  - `src/components` for reusable UI pieces
  - `src/data` for experience data
  - `src/lib` for shared logic/state

Technical resources used:
- `npm` (`npm install`) for dependency installation.
- `package.json` scripts (`dev`, `build`, `serve`) to run and validate the app.
- Next.js App Router folder structure (`src/app`) for route-based pages.

## 2. Global Layout and Base Styling

- A global layout was created so all pages share the same app frame.
- Global styles were added to define:
  - colors
  - typography
  - spacing
  - responsive behavior for mobile and desktop
- This made every page feel visually consistent.

Technical resources used:
- Next.js root layout file (`layout.jsx`) to wrap all pages once.
- Global stylesheet (`globals.css`) with CSS variables for color/theme consistency.
- Responsive CSS (`@media` rules) for mobile and desktop adaptation.

## 3. Reusable Header (Navbar)

- A reusable top navigation bar was built and shown on all pages.
- It includes links to:
  - Home
  - Experiences
  - Favorites
  - Profile
- Active link highlighting was added so users can clearly see which page they are on.
- A search input was integrated in the header for quick access.

Technical resources used:
- React client component (`"use client"`) for interactive header behavior.
- Next.js hooks: `usePathname`, `useRouter`.
- Next.js `Link` component for client-side navigation.
- Reusable `SearchBar` component for shared search UI.

## 4. Home Page

- The home page was designed with:
  - hero section
  - call-to-action button
  - destination shortcuts
  - category sections with cards
- The page uses reusable card/carousel style sections so content can scale easily.

Technical resources used:
- React `useMemo` for derived data (unique destinations and grouped categories).
- Reusable `ActivityCarouselSection` and card components.
- Dataset import from local data file for rendering content.

## 5. Explorer Page with Search + Filters

- A full explorer page was built to list all experiences.
- Search and filter controls were added:
  - search by title
  - filter by category
  - filter by destination
- Filters were connected to the URL query parameters.
- Result: if the page reloads or a link is shared, the same filters stay applied.
- A "no results" state was added when nothing matches.
- A "view more" pattern was added to progressively show more cards.

Technical resources used:
- Next.js hooks: `useSearchParams`, `usePathname`, `useRouter`.
- `URLSearchParams` API for reading/writing query values.
- React state (`useState`) and effects (`useEffect`) for syncing UI with URL.
- Utility function (`matchesSearch`) using case-insensitive regex behavior.
- Suspense wrapper for query-based page behavior in App Router.

## 6. Experience Detail Page

- A dynamic detail route was created (`/experiences/[id]`).
- It reads the selected ID and finds the matching item in the local dataset.
- The detail page displays:
  - title and destination/category
  - image gallery
  - description and highlights
  - booking side panel
- A safe fallback message appears if an invalid ID is visited.

Technical resources used:
- Dynamic route segment (`[id]`) in Next.js App Router.
- Route param parsing (`Number(routeParams.id)`) to match local data IDs.
- Conditional rendering for not-found fallback UI.
- Reusable classes/components for consistent page styling.

## 7. Favorites Feature

- A heart button toggle was added on cards.
- A global state provider was built to manage favorites across all pages.
- Favorites are saved in browser local storage, so they persist after refresh.
- The Favorites page displays only saved items and shows a clean empty state if none exist.

Technical resources used:
- React Context API (`createContext`, provider + custom hook).
- React hooks: `useState`, `useEffect`, `useMemo`, `useContext`.
- Browser `localStorage` for persistence.
- Shared app state module (`app-state`) to avoid duplicated logic.

## 8. Profile Page

- A static profile page was added.
- It includes mock traveler info and a summary section.
- The favorites count is shown here too, connected to global state.

Technical resources used:
- Shared `useAppState` hook for reading favorites count.
- Reusable CSS utility classes for profile cards/layout.
- Static JSX content mixed with live app state values.

## 9. Shared Components and Reuse

- The app was broken into reusable components to avoid repeating code.
- Core reusable pieces include:
  - SearchBar
  - FilterBar
  - ExperienceCard
  - FavoriteButton
  - PaginatedExperienceGrid
  - ActivityCarouselSection
- This made the app easier to maintain and extend.

Technical resources used:
- Component composition (small focused components combined into pages).
- Props drilling for controlled behavior (favorites, filters, callbacks).
- Pagination pattern with `visibleCount` state + “View more” button.

## 10. Final Step: Global Footer Added

- A new reusable footer component was created and attached to the global layout.
- It appears across all pages automatically.
- The footer follows the design references and includes:
  - a top discovery links area
  - a multi-column information area
  - language/currency controls
  - legal links row
- Responsive styles were added so it works on both mobile and desktop.

Technical resources used:
- New reusable `Footer` component mounted in root layout.
- Structured data arrays to generate footer link groups.
- Responsive CSS Grid for footer columns and section stacking.

## 11. Validation and Completion

- Build checks were run (`npm run build`) to confirm everything compiles correctly.
- The app now includes all required pages and key interactions:
  - multi-page navigation
  - search/filter with URL sync
  - detail view by ID
  - favorites flow
  - profile summary
  - shared navbar and shared footer

Technical resources used:
- Next.js production build pipeline (`next build`).
- Static/dynamic route output validation from build logs.
- Final consistency pass on routing, shared layout, and UI states.

## Short Technical Checklist (Quick Review)

1. Organized project structure for pages, components, data, and shared logic.
2. Added global layout and global styling system.
3. Built shared navbar and reusable search/filter UI.
4. Implemented home, explorer, detail, favorites, and profile pages.
5. Connected search and filters to URL query params.
6. Implemented favorites global state + local storage persistence.
7. Added responsive card grid and empty-state handling.
8. Added final global footer component across all pages.
9. Validated project with production build.

## Glossary (Useful Words and Concepts)

- `App Router`: Next.js routing system based on the `src/app` folder.
- `Client Component`: A component that runs in the browser and can use hooks/events.
- `Server Component`: A component rendered on the server by default in Next.js.
- `Dynamic Route`: A route that changes by parameter, like `/experiences/[id]`.
- `Query Params`: URL values like `?q=rome&category=Culture`.
- `Suspense`: React mechanism to show fallback UI while loading dependent content.
- `Context API`: Global state-sharing system in React without external libraries.
- `localStorage`: Browser storage used to persist lightweight user data.
- `Reusable Component`: UI block written once and reused in many pages.
- `Responsive Design`: Layout/style adapting to different screen sizes.

---

If you want, I can also create a second study file with:
- "What to practice next"
- "Common mistakes to avoid"
- "How to explain this project in an interview".
