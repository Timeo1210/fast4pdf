import axios from "axios";
import { AvailableTools } from "src/types";

interface Output {
  server: string;
  task: string;
}

export async function getServerAndTask(
  token: string,
  tool: AvailableTools
): Promise<Output> {
  try {
    const data = await axios({
      method: "GET",
      url: `https://api.ilovepdf.com/v1/start/${tool}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.data;
  } catch (e) {
    throw e;
  }
}
