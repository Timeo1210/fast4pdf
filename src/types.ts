import XORS from "ts-xors";

export interface defaultAPIParams {
  token: string;
  task: string;
  server: string;
}
export type AvailableTools =
  | "merge"
  | "pdfjpg"
  | "compress"
  | "imagepdf"
  | "unlock"
  | "officepdf"
  | "repair"
  | "rotate"
  | "protect";
export type TaskStatus =
  | "TaskWaiting"
  | "TaskProcessing"
  | "TaskSuccess"
  | "TaskSuccessWithWarnings"
  | "TaskError"
  | "TaskDeleted"
  | "TaskNotFound";
export interface processFile {
  [key: string]: any;
  server_filename: string;
  filename: string;
  rotate?: number;
  password?: string;
}
export type processFiles = Array<processFile>;

export interface processOther {
  [key: string]: any;
  ignore_errors?: boolean;
  ignore_password?: boolean;
  output_filename?: string;
  packaged_filename?: string;
  file_encryption_key?: string;
  try_pdf_repair?: boolean;
  custom_int?: number;
  custom_string?: string;
  webhook?: string;
}

export interface processSplit {
  [key: string]: any;
  split_mode: "ranges" | "fixed_range" | "remove_pages";
  ranges: string;
  fixed_range: number;
  remove_pages: string;
  merge_after: boolean;
}
export interface processCompress {
  [key: string]: any;
  compression_level: "extreme" | "recommended" | "low";
}
export interface processPdfjpg {
  [key: string]: any;
  pdfjpg_mode: "pages" | "extract";
}
export interface processImgPdf {
  [key: string]: any;
  orientation: "portrait" | "landscape";
  margin: number;
  pagesize: "fit" | "A4" | "letter";
  merge_after?: boolean;
}
export interface processUnlock {
  [key: string]: any;
  password: string;
}
export interface processRotate {
  [key: string]: any;
  rotate: number;
}
export interface processProtect {
  [key: string]: any;
  password: string;
}
export type processAll = processOther &
  XORS<
    [
      processSplit,
      processCompress,
      processPdfjpg,
      processImgPdf,
      processRotate,
      processProtect,
      processUnlock,
      {}
    ]
  >;
