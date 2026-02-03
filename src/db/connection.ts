import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

import { join } from "node:path";
import { homedir } from "node:os";
import { mkdirSync } from "node:fs";

// 1. Define a hidden folder in the home directory
const configDir = join(homedir(), ".zeronium");
const dbPath = join(configDir, "zeronium.db");

// 2. Ensure the folder exists (Bun will throw an error if the path doesn't exist)
try {
    mkdirSync(configDir, { recursive: true });
} catch (err) {
    console.log("Couldn't configure database", err);
}

const sqlite = new Database(dbPath);
export const db = drizzle({ client: sqlite });
