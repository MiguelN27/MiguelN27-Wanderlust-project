import "./globals.css";
import Navbar from "../components/Navbar";
import { AppStateProvider } from "../lib/app-state";

export const metadata = {
  title: "Wanderlust Experiences",
  description: "Discover and save curated experiences around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppStateProvider>
          <Navbar />
          <main className="page-shell">{children}</main>
        </AppStateProvider>
      </body>
    </html>
  );
}
