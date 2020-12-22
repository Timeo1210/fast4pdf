import axios, { AxiosRequestConfig } from "axios";
import {
  AvailableTools,
  processFiles,
  processAll,
  TaskStatus,
  defaultAPIParams,
} from "src/types";
import buildFilesData from "../utils/buildFilesData";
import FormData from "form-data";

interface Output {
  status: TaskStatus;
  download_filename: string;
}

export async function processTask(
  defaultParams: defaultAPIParams,
  tool: AvailableTools,
  files: processFiles,
  other: processAll = {}
): Promise<Output> {
  try {
    const { token, task, server } = defaultParams;

    const queryData = new FormData();
    queryData.append("task", task);
    queryData.append("tool", tool);
    const { filesData, filesDataKeys } = buildFilesData(files);
    for (let i = 0; i < filesDataKeys.length; i++) {
      queryData.append(filesDataKeys[i], filesData[`${filesDataKeys[i]}`]);
    }
    const otherKeys = Object.keys(other) as Array<keyof typeof other & string>;
    for (let i = 0; i < otherKeys.length; i++) {
      const otherValue = other[`${otherKeys[i]}`];
      if (!otherValue) continue;
      queryData.append(otherKeys[i], otherValue);
    }

    const options = {
      method: "POST",
      url: `https://${server}/v1/process`,
      headers: {
        Authorization: `Bearer ${token}`,
        ...queryData.getHeaders(),
      },
      data: queryData,
    } as AxiosRequestConfig;

    const { data } = await axios(options);

    return {
      status: data.status as TaskStatus,
      download_filename: (data.download_filename as string) || "",
    };
  } catch (e) {
    throw e;
  }
}
