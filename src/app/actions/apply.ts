import { redirect } from "next/navigation";

export async function apply(slug: string, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const resume = formData.get("resume");
  const coverLetter = formData.get("cover-letter");

  // Here you would typically save the application to a database
  // and upload the resume to a file storage service.
  // For this example, we'll just log the data to the console.
  console.log({ name, email, phone, resume, coverLetter });

  redirect("/jobs/thank-you");
}
