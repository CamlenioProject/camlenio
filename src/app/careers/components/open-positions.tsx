"use client";
import { MapPin, Clock, Filter } from "lucide-react";
import { jobs } from "../../../../lib/jobs";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["All Roles", "Engineering", "Design", "Product", "Remote"];

const OpenPositions = () => {
  const [activeFilter, setActiveFilter] = useState("All Roles");

  // Helper to determine category from job title
  const getJobCategory = (title: string) => {
    if (title.includes("Designer")) return "Design";
    if (title.includes("Product")) return "Product";
    return "Engineering"; // Fallback for Developer, Engineer, Scientist
  };

  const filteredJobs = jobs.filter((job) => {
    if (activeFilter === "All Roles") return true;
    if (activeFilter === "Remote") return job.location === "Remote";
    return getJobCategory(job.title) === activeFilter;
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 ">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">
          Open{" "}
          <span
            className=" text-orange-500 "
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            Positions
          </span>
        </h2>
        <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
          Join our team and make an impact
        </p>

        <div className="flex flex-wrap gap-4 mb-8 justify-center  text-gray-900">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center gap-2 border-1 border-orange-300 px-4 py-2 rounded-lg text-sm transition-colors ${activeFilter === category
                  ? "bg-orange-500 text-gray-50 border-orange-500"
                  : "hover:bg-orange-500 hover:text-gray-50"
                }`}
            >
              {category === "All Roles" && <Filter className="h-4 w-4" />}
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((position, index) => (
              <div
                key={index}
                className="rounded-xl border-1 border-orange-200 bg-orange-100 hover:scale-[1.01] transition-transform duration-300 p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-2 cursor-pointer">
                      <span className="inline-flex items-center gap-1 bg-orange-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                        <MapPin className="h-3 w-3" />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-orange-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                        <Clock className="h-3 w-3" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/jobs/${position.slug}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition shrink-0 self-start sm:self-center text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No open positions found for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
