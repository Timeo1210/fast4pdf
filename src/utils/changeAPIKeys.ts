import readline from "readline";
import writeKeysToEnv from "./writeKeysToEnv";

export default function () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Please inquire your API Keys: ");
  console.log(`
    - Go to https://developer.ilovepdf.com/ and create an developer account.
    - Naviguate to https://developer.ilovepdf.com/user/projects and create a project.
  `);
  rl.question("Enter your Project key (JTI Claim): ", (answer) => {
    const publicKey = answer.trim();
    writeKeysToEnv({
      PUBLIC_KEY: publicKey,
    });

    rl.question("Enter your Secret key: ", (answer) => {
      const privateKey = answer.trim();
      writeKeysToEnv({
        PRIVATE_KEY: privateKey,
      });

      rl.close();
    });
  });
}
