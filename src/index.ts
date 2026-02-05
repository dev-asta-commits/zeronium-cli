#!/usr/bin/env bun

import { Command } from "commander";
export const zero = new Command();

// command imports
import { create, init, projects, remove, jump, nuke } from "@/core/commands";

import path from "node:path";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import { db } from "./db/connection";

const ensureDbReady = async () => {
    const binaryDir = path.dirname(process.execPath);
    const migrationsPath = path.resolve(binaryDir, "./drizzle");
    await migrate(db, { migrationsFolder: migrationsPath });
    console.log("Registry configured.");
};

zero.name("zeronium-cli")
    .description("A CLI project manager")
    .version("0.2.8", "-v, --version", "output the current version")
    .action(ensureDbReady);

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

// management
init(zero);
create(zero);
remove(zero);
projects(zero);

// navigation
jump(zero);

nuke(zero);

zero.parse();
