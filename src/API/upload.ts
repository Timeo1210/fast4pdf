import axios, { AxiosRequestConfig } from "axios";
import fs from "fs";
import FormData from "form-data";
import { defaultAPIParams } from "src/types";

interface Output {
  server_filename: string;
}

interface fileOption {
  key: "file" | "cloud_file";
  value: fs.ReadStream | string;
}

export async function uploadFileOrLink(
  defaultParams: defaultAPIParams,
  filePath: string
): Promise<Output> {
  try {
    const { token, task, server } = defaultParams;
    const fileOptions = await buildFileOption(filePath);

    const queryData = new FormData();
    queryData.append(fileOptions.key, fileOptions.value);
    queryData.append("task", task);

    const options = {
      method: "POST",
      url: `https://${server}/v1/upload`,
      headers: {
        Authorization: `Bearer ${token}`,
        ...queryData.getHeaders(),
      },
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
      data: queryData,
    } as AxiosRequestConfig;

    const data = await axios(options);

    return data.data;
  } catch (e) {
    throw e;
  }
}

async function buildFileOption(filePath: string): Promise<fileOption> {
  if (fs.existsSync(filePath)) {
    return { key: "file", value: fs.createReadStream(filePath) };
  }

  const protocol = filePath.split(":")[0];
  if (protocol === "http" || protocol === "https") {
    return { key: "cloud_file", value: filePath };
  } else {
    throw `${filePath} -> this file doesn't exist`;
  }
}
