#!/usr/bin/env bun

import { Command } from "commander";
export const zero = new Command();

// command imports
import { create, init, projects, remove, nuke } from "@/core/commands";

zero.name("zeronium-cli")
    .description("A CLI project manager")
    .version(
        process.env.VERSION!,
        "-v, --version",
        "output the current version",
    );

zero.addHelpText(
    "beforeAll",
    `
    -----------------------
    |                     |
    |    ZERONIUM-CLI     |
    |                     |
    -----------------------


You can use either zero or zeronium-cli. Both are just different aliases for the same app

Usage: zero [options] [command]
    `,
);

init(zero);
create(zero);
remove(zero);
projects(zero);

nuke(zero);

zero.parse();
