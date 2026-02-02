#!/usr/bin/env bun

import { Command } from "commander";

const program = new Command();

program
    .action(() => {
        console.log("hello using commanderjs here...");
    })
    .name("zeronium-cli")
    .description("A CLI application to manage your projects")
    .version("1.0.0");

program.parse();
