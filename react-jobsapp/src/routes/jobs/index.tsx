import { createFileRoute } from "@tanstack/react-router";
import JobListings from "@/components/JobListings";

export const Route = createFileRoute("/jobs/")({
  component: JobsPage,
});

function JobsPage() {
  return <JobListings />;
}
