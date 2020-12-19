#!/usr/bin/env node
import commander from "commander";
import dotenv from "dotenv";

import makeCommands from "./commands/makeCommands";
import API from "./API/API";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const program = new commander.Command("fast4pdf");
makeCommands(program);

function makeMergeCommand(): commander.Command {
  const merge = new commander.Command("merge");
  merge
    .arguments("<outputFile> <inputFiles...>")
    .description("Merge liste of pdf into one pdf")
    .usage("<outputFile> <inputFiles...>")
    .action((outputFile: string, inputFiles: Array<string>) => {
      console.log("inputFiles", inputFiles);
      console.log("outputFile:", outputFile);
      // console.log("others:", other);
    });

  return merge;
}
(async () => {
  /*
  const tool = "pdfjpg";
  const token = await API.getToken();

  const { server, task } = await API.getServerAndTask(token, tool);
  console.log(token);
  console.log(server);
  console.log(task);
  // /c/Users/timeo/Desktop/Cours/Maths/1re/Exos/Ex67p276_Ex70p277_Ex108p35.pdf
  // http://www.spc.ac-aix-marseille.fr/phy_chi/Menu/Activites_pedagogiques/cap_exp/Pdf/Dilution.pdf
  const { server_filename } = await API.uploadFileOrLink(
    token,
    task,
    server,
    "http://www.spc.ac-aix-marseille.fr/phy_chi/Menu/Activites_pedagogiques/cap_exp/Pdf/Dilution.pdf"
  );

  await API.processTask(
    token,
    server,
    task,
    tool,
    [{ filename: "Dilution.pdf", server_filename }],
    {}
  );

  const response = await API.downloadFromTask(token, task, server);
  */
})();
// program.addCommand(makeMergeCommand());
program.parse(process.argv);
