import { Achievements } from "./components/achievements";
import { AcademicTimeline } from "./components/academic-timeline";
import { Announcements } from "./components/announcements";
import { CallToAction } from "./components/call-to-action";
import { Events } from "./components/events";
import { Hero } from "./components/hero";
import { NewsSection } from "./components/news-section";
import { ServiceStrip } from "./components/service-strip";
import { StatBand } from "./components/stat-band";
import { PAGE_DESCRIPTION, PAGE_TITLE } from "./content";

/*===== Meta =====*/

export function meta() {
  return [
    { title: PAGE_TITLE },
    { name: "description", content: PAGE_DESCRIPTION },
    { name: "theme-color", content: "#103d40" },
  ];
}

/*===== Home =====*/

/** The university homepage. Sections alternate `background`, `muted` and `deep` bands. */
export default function Home() {
  return (
    <>
      <Hero />
      <ServiceStrip />
      <NewsSection />
      <Announcements />
      <AcademicTimeline />
      <StatBand />
      <Achievements />
      <Events />
      <CallToAction />
    </>
  );
}
