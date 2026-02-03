#!/usr/bin/env bun

import { Command } from "commander";
const zero = new Command();

// command imports
import { create, init, projects } from "./core/commands";

zero.name("zeronium-cli")
    .description("A CLI project manager")
    .version(
        process.env.VERSION!,
        "-v, --version",
        "output the current version",
    );

init(zero);
create(zero);
projects(zero);

zero.parse();
