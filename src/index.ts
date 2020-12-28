#!/usr/bin/env node
import commander from "commander";
import dotenv from "dotenv";

import makeCommands from "./commands/makeCommands";
import changeAPIKeys from "./utils/changeAPIKeys";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "./.env.dev",
  });
  console.log(process.env.PUBLIC_KEY);
} else {
  dotenv.config({
    path: "./.env.prod",
  });
  if (
    process.env.PUBLIC_KEY === undefined ||
    process.env.PRIVATE_KEY === undefined
  ) {
    changeAPIKeys();
  }
}

const program = new commander.Command("fast4pdf");
makeCommands(program);

program.parse(process.argv);
