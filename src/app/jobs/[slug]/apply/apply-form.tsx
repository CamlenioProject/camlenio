"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { jobs } from "../../../../../lib/jobs";
import axios from "axios";

import { validateApplyForm, ApplyFormValues } from "../../../../../lib/validators";

export default function ApplyForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ApplyFormValues, string>>>({});
  const router = useRouter();
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  const job = useMemo(() => jobs.find((j) => j.slug === slug), [slug]);

  if (!job) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Careers
        </Link>
        <h1 className="text-2xl font-semibold mt-6">Job not found</h1>
      </main>
    );
  }

  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setNotification(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);

    // Prepare data for validation
    const validationData: ApplyFormValues = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      linkedin: formData.get('linkedin') as string,
      portfolio: formData.get('portfolio') as string,
      resume: formData.get('resume') as File,
      coverLetter: formData.get('coverLetter') as string
    };

    // Run Validation
    const validation = validateApplyForm(validationData);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      setLoading(false);
      setError("Please fix the errors below.");
      return;
    }

    try {
      // Send FormData directly (axios handles multipart/form-data automatically)
      await axios.post("/api/apply", formData);

      // Show Notification instead of alert
      setNotification({ message: "Application received! Our team will contact you shortly.", type: 'success' });

      // Wait for 3 seconds before redirecting so user can see the message
      setTimeout(() => {
        router.push("/career");
      }, 3000);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(
          err.message || "An error occurred while submitting the application."
        );
      } else {
        setError(
          String(err) || "An error occurred while submitting the application."
        );
      }
      setLoading(false); // Stop loading on error
    }
    // Do NOT stop loading on success so the button stays "Submitting..." or similar until redirect
  };

  return (
    <main className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove relative">
      {/* Floating Notification */}
      {notification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[100000000] animate-bounce">
          <div className={`px-6 py-3 rounded-full shadow-lg text-white font-medium ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
            {notification.message}
          </div>
        </div>
      )}

      {error && <div className="bg-red-500 text-white p-4 text-center">{error}</div>}
      <div className="max-w-3xl mx-auto  px-4 py-12 sm:py-20 md:py-30">
        <div className="mb-8">
          <Link
            href={`/jobs/${job.slug}`}
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {job.title}
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Apply for {job.title}
        </h1>
        <p className="text-gray-600 mb-6">
          Please fill out the form below. Fields marked with * are required.
        </p>

        <div className="bg-orange-50/50 rounded-xl border border-orange-200 text-gray-900 shadow-sm">
          <div className="p-6">
            <form
              onSubmit={onSubmit}
              className="space-y-6"
              aria-label={`Application form for ${job.title}`}
            >
              <input type="hidden" name="job" value={job.title} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="Jane"
                    className={`flex h-10 w-full rounded-md border ${fieldErrors.firstName ? 'border-red-500' : 'border-orange-300'} bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  />
                  {fieldErrors.firstName && <span className="text-xs text-red-500">{fieldErrors.firstName}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className={`flex h-10 w-full rounded-md border ${fieldErrors.lastName ? 'border-red-500' : 'border-orange-300'} bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  />
                  {fieldErrors.lastName && <span className="text-xs text-red-500">{fieldErrors.lastName}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    className={`flex h-10 w-full rounded-md border ${fieldErrors.email ? 'border-red-500' : 'border-orange-300'} bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  />
                  {fieldErrors.email && <span className="text-xs text-red-500">{fieldErrors.email}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+1 555 123 4567"
                    className={`flex h-10 w-full rounded-md border ${fieldErrors.phone ? 'border-red-500' : 'border-orange-300'} bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  />
                  {fieldErrors.phone && <span className="text-xs text-red-500">{fieldErrors.phone}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="linkedin"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  LinkedIn
                </label>
                <input
                  id="linkedin"
                  name="linkedin"
                  placeholder="https://www.linkedin.com/in/username"
                  className={`flex h-10 w-full rounded-md border ${fieldErrors.linkedin ? 'border-red-500' : 'border-orange-300'} bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                />
                {fieldErrors.linkedin && <span className="text-xs text-red-500">{fieldErrors.linkedin}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="portfolio"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Portfolio or Website
                </label>
                <input
                  id="portfolio"
                  name="portfolio"
                  placeholder="https://your-portfolio.com"
                  className={`flex h-10 w-full rounded-md border ${fieldErrors.portfolio ? 'border-red-500' : 'border-orange-300'} bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                />
                {fieldErrors.portfolio && <span className="text-xs text-red-500">{fieldErrors.portfolio}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="resume"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Resume (PDF) *
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf"
                  className={`flex h-10 w-full rounded-md border ${fieldErrors.resume ? 'border-red-500' : 'border-orange-300'} bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                />
                {fieldErrors.resume && <span className="text-xs text-red-500">{fieldErrors.resume}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="coverLetter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  placeholder="Write a brief cover letter..."
                  className={`flex min-h-[80px] w-full rounded-md border ${fieldErrors.coverLetter ? 'border-red-500' : 'border-orange-300'} bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                />
                {fieldErrors.coverLetter && <span className="text-xs text-red-500">{fieldErrors.coverLetter}</span>}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Link
                  href={`/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-500 text-white hover:bg-orange-600 h-10 px-4 py-2"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
