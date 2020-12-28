import fs from "fs/promises";
import path from "path";

interface PublicKeyInput {
  [key: string]: any;
  PUBLIC_KEY: string;
}
interface PrivateKeyInput {
  [key: string]: any;
  PRIVATE_KEY: string;
}
type envKeyType = PublicKeyInput | PrivateKeyInput;

export default async function (envObject: envKeyType) {
  for (const inputKey in envObject) {
    const inputValue = envObject[inputKey];

    const envFile = path.resolve(
      path.dirname(path.dirname(__dirname)),
      "./.env.prod"
    );
    const envFileData = (await fs.readFile(envFile)).toString();
    if (
      envFileData.includes("PUBLIC_KEY") &&
      envFileData.includes("PRIVATE_KEY")
    ) {
      const envData = envFileData.split("\n");
      for (let i = 0; i < envData.length; i++) {
        const [envDataKey] = envData[i].split("=");
        if (envDataKey === inputKey) {
          const finalEnv = [envDataKey, inputValue].join("=");
          envData[i] = finalEnv;
          break;
        }
      }
      const finalEnvData = envData.join("\n");
      await fs.writeFile(envFile, finalEnvData);
    } else {
      const finalEnvData = `${inputKey}=${inputValue}\n`;
      await fs.appendFile(envFile, finalEnvData);
    }
  }
}
