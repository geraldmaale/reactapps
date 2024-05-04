import { Link } from "react-router-dom";
import { useState } from "react";
import { Job } from "../types/Job";
import { FaMapMarker } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const JobCard = ({ job }: { job: Job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;
  if (!showFullDescription) {
    description = job.description.substring(0, 90) + "...";
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>

        <Button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="dark:hover:border-indigo-500 text-indigo-500 hover:bg-transparent text-xs bg-transparent m-auto p-0"
        >
          {showFullDescription ? "Show Less" : "Show More"}
        </Button>
        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-indigo-500 dark:text-gray-400 mb-3">
            <FaMapMarker className="inline mr-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
