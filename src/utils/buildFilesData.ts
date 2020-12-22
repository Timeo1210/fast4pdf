import { processFiles } from "src/types";

interface filesData {
  [key: string]: string;
}
type filesDataKeys = Array<keyof filesData & string>;
interface filesDataOutput {
  filesData: filesData;
  filesDataKeys: filesDataKeys;
}

export default function buildFilesData(files: processFiles): filesDataOutput {
  let filesData: filesData = {};

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileKeys = Object.keys(file) as Array<keyof typeof file>;
    for (let j = 0; j < fileKeys.length; j++) {
      const fileValue = file[`${fileKeys[j]}`];
      if (!fileValue) continue;
      filesData[`files[${i}][${fileKeys[j]}]`] = fileValue;
    }
  }

  const filesDataKeys: filesDataKeys = Object.keys(filesData);
  return { filesData, filesDataKeys };
}
