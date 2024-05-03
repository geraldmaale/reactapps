import { useState, useEffect } from "react";
import JobData from "../data/jobs.json"
import { Job } from "../types/Job";
import JobCard from "./JobCard"

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const jobListings = () => {
            try {
                // wait for 1 second to simulate API call
                setTimeout(() => {
                    const data = isHome ? JobData.jobs.slice(0, 3) : JobData.jobs;
                    setJobs(data);
                }, 1000);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        jobListings();
    }, [isHome]);


    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Featured Jobs" : "Browse Jobs"}
                </h2>

                {loading
                    ? (<h1 className="text-4xl">Loading...</h1>)
                    : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    )}

            </div>
        </section>
    )
}

export default JobListings