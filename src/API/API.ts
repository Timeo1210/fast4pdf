import { getToken } from "./auth";
import { getServerAndTask } from "./start";
import { uploadFileOrLink } from "./upload";
import { processTask } from "./process";
import { downloadFromTask } from "./download";

export default {
  getToken,
  getServerAndTask,
  uploadFileOrLink,
  processTask,
  downloadFromTask,
};
