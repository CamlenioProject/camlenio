import { jobs } from "../../../../../lib/jobs";
import ApplyForm from "./apply-form";

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default function ApplyJobPage() {
  return <ApplyForm />;
}
