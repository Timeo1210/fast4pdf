import axios, { AxiosRequestConfig } from "axios";
import { defaultAPIParams } from "src/types";

export async function downloadFromTask(
  defaultParams: defaultAPIParams
): Promise<any> {
  try {
    const { token, task, server } = defaultParams;

    const options = {
      method: "GET",
      url: `https://${server}/v1/download/${task}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "stream",
    } as AxiosRequestConfig;

    const response = await axios(options);

    return response.data;
  } catch (e) {
    throw e;
  }
}
