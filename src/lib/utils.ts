import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to fetch with headers
 * @param path
 * @returns standard fetch response
 */
export const fetchWithHeaders = async (
  path: string,
  {
    method,
    headers,
    body,
  }: {
    method: "GET" | "POST" | "PATCH" | "DELETE";
    headers?: object;
    body?: object;
  }
) => {
  const requestHeaders = headers ? headers : {};
  const response = await fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...requestHeaders,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return response;
};

/**
 * Send an activation email
 * @host /mfa/send_mfa_token/
 * @param email
 * @returns a response without data
 */
export const sendEmail = async ({
  msg,
}: {
  msg: string;
}): Promise<{ ok: boolean; status: number; error?: string }> => {
  const response = await fetchWithHeaders(
    "https://socketshock-server-b8acf64c3cfc.herokuapp.com/email/email_me/",
    {
      method: "POST",
      headers: {},
      body: {
        msg,
        domain: "davidscholer.com", // Include domain to match the expected input in the backend
      },
    }
  );
  const data = await response.json();
  if (response.status === 200) {
    return {
      ok: true,
      status: response.status,
    };
  }
  return {
    ok: false,
    status: response.status,
    error: data.message || "Failed to send activation email",
  };
};
