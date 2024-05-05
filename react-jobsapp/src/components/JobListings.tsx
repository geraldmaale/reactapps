import { useState, useEffect } from "react";
import JobData from "../data/jobs.json";
import { Job } from "../types/Job";
import JobCard from "./JobCard";
import { Skeleton } from "@/components/ui/skeleton";

const url = import.meta.env.VITE_API_URL;
console.log(url);

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const useApi = true;

  useEffect(() => {
    const jobListings = async () => {
      try {
        if (useApi) {
          let jobs = await fetch(`${url}/api/jobs`).then(
            (res) => res.json() as Promise<Job[]>
          );

          setTimeout(() => {
            jobs = isHome ? jobs.slice(0, 3) : jobs;
            setJobs(jobs);
          }, 1000);
        } else {
          const data = isHome ? JobData.jobs.slice(0, 3) : JobData.jobs;
          setJobs(data);
          return;
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    jobListings();
  }, [isHome, useApi]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Featured Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
