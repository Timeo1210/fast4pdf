#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const dotenv_1 = __importDefault(require("dotenv"));
const makeCommands_1 = __importDefault(require("./commands/makeCommands"));
if (process.env.NODE_ENV !== "production") {
    dotenv_1.default.config();
}
const program = new commander_1.default.Command("fast4pdf");
makeCommands_1.default(program);
function makeMergeCommand() {
    const merge = new commander_1.default.Command("merge");
    merge
        .arguments("<outputFile> <inputFiles...>")
        .description("Merge liste of pdf into one pdf")
        .usage("<outputFile> <inputFiles...>")
        .action((outputFile, inputFiles) => {
        console.log("inputFiles", inputFiles);
        console.log("outputFile:", outputFile);
    });
    return merge;
}
(() => __awaiter(void 0, void 0, void 0, function* () {
}))();
program.parse(process.argv);
//# sourceMappingURL=index.js.map