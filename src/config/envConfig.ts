import { z } from "zod";

const configSchema = z.object({
  API_ENDPOINT: z.string(),
  PUBLIC_URL: z.string(),
});

const configProject = configSchema.safeParse({
  API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
});

if (!configProject.success) {
  throw new Error("Invalid environment!");
}

export const envConfig = configProject.data;
