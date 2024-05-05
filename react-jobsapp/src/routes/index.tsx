import Hero from "@/components/Hero";
import HomeCards from "@/components/HomeCards";
import JobListings from "@/components/JobListings";
import ViewAllJobs from "@/components/ViewAllJobs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <>
        <Hero
          title="Find Your Developer Job"
          subTitle="We have the best developers in the world. Find your next developer job here."
        />

        <HomeCards />

        <JobListings isHome={true} />

        <ViewAllJobs />
      </>
    );
  },
});
