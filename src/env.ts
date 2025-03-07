// validate env via zod
import { z } from "zod";

export const envSchema = z.object({
  SERVER_VERSION: z.string().optional(),
  BRIAN_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
