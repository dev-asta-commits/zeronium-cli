#!/usr/bin/env bun

import { Command } from "commander";
const program = new Command();

// command imports
import { init } from "./core/commands";

program
    .name("zeronium-cli")
    .description("A CLI project manager")
    .version(
        process.env.VERSION!,
        "-v, --version",
        "output the current version",
    );

init(program);

program.parse();
