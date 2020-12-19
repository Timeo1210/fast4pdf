import path from "path";

export default function changeExtension(filePath: string, extension: string) {
  return path.join(
    path.dirname(filePath),
    path.basename(filePath, path.extname(filePath)) + extension
  );
}
