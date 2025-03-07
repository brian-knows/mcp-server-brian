import { BrianSDK } from "@brian-ai/sdk";
import { env } from "./env";

export const brian = new BrianSDK({ apiKey: env.BRIAN_API_KEY });
