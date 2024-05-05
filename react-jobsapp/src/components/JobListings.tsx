// import { useState, useEffect } from "react";
import JobData from "../data/jobs.json";
import { Job } from "../types/Job";
import JobCard from "./JobCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ofetch } from "ofetch";
import { useQuery, queryOptions } from "@tanstack/react-query";

const url = import.meta.env.VITE_API_URL;

async function getJobListings(useApi: boolean, isHome: boolean) {
  if (useApi) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let getJobs = await ofetch<Job[]>(`${url}/api/jobs`);
    getJobs = isHome ? getJobs.slice(0, 3) : getJobs;
    return getJobs;
  } else {
    const data = isHome ? JobData.jobs.slice(0, 3) : JobData.jobs;
    return data;
  }
}

function groupOptions(useApi: boolean, isHome: boolean) {
  return queryOptions({
    queryKey: ["all-jobs", { useApi, isHome }],
    queryFn: () => getJobListings(useApi, isHome),
    staleTime: 2 * 1000,
  });
}

const JobListings = ({ useApi = true, isHome = false }) => {
  const { data, error, isPending } = useQuery(groupOptions(useApi, isHome));

  const renderError = () => {
    return (
      <div className="text-red-500 text-center col-span-3">
        Error fetching data
      </div>
    );
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Featured Jobs" : "Browse Jobs"}
        </h2>

        {isPending ? (
          <Skeleton className="w-[100px] h-[20px] rounded-full mx-auto" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {error
              ? renderError()
              : data?.map((job) => <JobCard key={job.id} job={job} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
