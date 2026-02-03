#!/usr/bin/env bun

import { Command } from "commander";
export const zero = new Command();

// command imports
import { create, init, projects, remove } from "./core/commands";

zero.name("zeronium-cli")
    .description("A CLI project manager")
    .version(
        process.env.VERSION!,
        "-v, --version",
        "output the current version",
    );

init(zero);
create(zero);
remove(zero);
projects(zero);

zero.parse();
