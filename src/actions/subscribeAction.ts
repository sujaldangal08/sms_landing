export default async function subscribeAction(email: string): Promise<boolean> {
  const response = await fetch(
    `${"https://frontend.shikshya.me/public/api/v1" + "/subscribe"}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type of the request body
        // You can add other headers if needed
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  );
  return response.ok;
}
