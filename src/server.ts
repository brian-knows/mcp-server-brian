import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { env } from "./env";
import { z } from "zod";
import { brian } from "./brian";

const server = new McpServer({
  name: "Brian",
  version: env.SERVER_VERSION || "1.0.0",
});

server.tool(
  "brian-tool",
  "retrieve transaction data from a prompt using Brian",
  {
    address: z.string(),
    prompt: z.string(),
    chainId: z.number().optional(),
  },
  async ({ address, prompt, chainId }) => {
    const brianResponse = await brian.transact({
      address,
      prompt,
      chainId: chainId ? `${chainId}` : undefined,
    });

    return {
      content: [{ type: "text", text: JSON.stringify(brianResponse) }],
    };
  }
);

export { server };
