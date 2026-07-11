import { Suspense } from "react";
import ExperiencesExplorer from "../../components/ExperiencesExplorer";

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<p className="no-results">Loading experiences...</p>}>
      <ExperiencesExplorer />
    </Suspense>
  );
}
