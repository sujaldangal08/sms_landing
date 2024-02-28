import { contactInterface } from "@/types/formSchema";

export default async function contactAction(
  e: contactInterface
): Promise<boolean> {
  const response = await fetch(
    `${"https://frontend.shikshya.me/public/api/v1" + "/queries"}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type of the request body
        // You can add other headers if needed
      },
      body: JSON.stringify({
        fullName: e.fullName,
        orgName: e.organizationName,
        email: e.email,
        phnumber: e.phone,
        subject: e.subject,
        message: e.message,
      }),
    }
  );
  return response.ok;
}
