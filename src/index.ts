#!/usr/bin/env bun

import { Command } from "commander";
const program = new Command();

program
    .name("zeronium-cli")
    .description("A CLI project manager")
    .version(process.env.VERSION!);

program
    .command("init")
    .description("Initializes a new project in the current directory")
    .argument("<string>", "Name of the project")
    .option("-t --tag", "A list of tags")
    .action((str, options) => {
        console.log("Created a project with the name : ", str.split(" ")[0]);
        if (options.tag) console.log("with the followin tags : ", options.tag);
    });

program.parse();
