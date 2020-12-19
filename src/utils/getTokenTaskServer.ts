import API from "../API/API";
import { AvailableTools, defaultAPIParams } from "src/types";

export default async function getTokenTaskServer(
  tool: AvailableTools
): Promise<defaultAPIParams> {
  const token = await API.getToken();
  const { task, server } = await API.getServerAndTask(token, tool);

  return {
    token,
    task,
    server,
  };
}
