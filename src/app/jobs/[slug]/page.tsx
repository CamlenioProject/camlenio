import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MapPin, ArrowLeft } from "lucide-react";
import { jobs } from "../../../../lib/jobs";

type MaybePromise<T> = T | Promise<T>;

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

type Params = { slug?: string | string[] };

export default async function JobApplyPage({
  params,
}: {
  params?: MaybePromise<Params>;
}) {
  const resolvedParams =
    params && typeof (params as { then?: unknown }).then === "function"
      ? await params
      : (params as Params | undefined) ?? {};

  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;

  const job = jobs.find((j) => j.slug === slug);
  if (!job) return notFound();

  return (
    <main className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="border-1 border-orange-200 rounded-xl p-4">
          <div className="mb-8">
            <Link
              href="/component/company/career"
              className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Careers
            </Link>
          </div>

          <header className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              {job.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-600 bg-secondary hover:bg-secondary/80">
                <MapPin className="h-3 w-3" />
                {job.location}
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-600 bg-secondary hover:bg-secondary/80">
                <Clock className="h-3 w-3" />
                {job.type}
              </div>
            </div>
          </header>

          <div className="rounded-xl bg-card text-gray-700 shadow-sm border-1 border-orange-200 mb-8">
            <div className="p-6">
              <p className="text-muted-foreground text-pretty">
                {job.longDescription || job.description}
              </p>
            </div>
          </div>

          {job.responsibilities?.length > 0 && (
            <div className="mb-8 text-gray-900">
              <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="text-pretty">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {job.requirements?.length > 0 && (
            <div className="mb-10 text-gray-900">
              <h2 className="text-xl font-semibold mb-3">Requirements</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {job.requirements.map((item, i) => (
                  <li key={i} className="text-pretty">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-2">
            <Link
              href={`/jobs/${job?.slug}/apply`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-orange-500 hover:bg-orange-500/90 text-gray-50 "
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
