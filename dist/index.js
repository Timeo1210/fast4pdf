#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const dotenv_1 = __importDefault(require("dotenv"));
const makeCommands_1 = __importDefault(require("./commands/makeCommands"));
const changeAPIKeys_1 = __importDefault(require("./utils/changeAPIKeys"));
process.env.NODE_ENV = "production";
(async () => {
    if (process.env.NODE_ENV !== "production") {
        dotenv_1.default.config({
            path: "./.env.dev",
        });
        console.log(process.env.PUBLIC_KEY);
    }
    else {
        dotenv_1.default.config({
            path: "./.env.prod",
        });
        if (process.env.PUBLIC_KEY === undefined ||
            process.env.PRIVATE_KEY === undefined) {
            await changeAPIKeys_1.default();
        }
    }
    const program = new commander_1.default.Command("fast4pdf");
    makeCommands_1.default(program);
    program.parse(process.argv);
})();
//# sourceMappingURL=index.js.map