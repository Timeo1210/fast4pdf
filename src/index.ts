#!/usr/bin/env node
import commander from "commander";
import dotenv from "dotenv";
import path from "path";

import makeCommands from "./commands/makeCommands";
import changeAPIKeys from "./utils/changeAPIKeys";

process.env.NODE_ENV = "production";
(async () => {
  if (process.env.NODE_ENV !== "production") {
    dotenv.config({
      path: "./.env.dev",
    });
  } else {
    dotenv.config({
      path: path.resolve(path.dirname(__dirname), ".env.prod"),
    });
    if (process.env.PUBLIC_KEY === undefined) {
      await changeAPIKeys();
    }
  }

  const program = new commander.Command("fast4pdf");
  makeCommands(program);

  program.parse(process.argv);
})();
