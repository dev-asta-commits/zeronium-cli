import { defineConfig } from "drizzle-kit";
import { join } from "node:path";
import { homedir } from "node:os";

export default defineConfig({
    out: "./drizzle/",
    schema: "./src/db/schema/*",
    dialect: "sqlite",
    dbCredentials: {
        url: `file:${join(homedir(), ".zeronium", "zeronium.db")}`,
    },
});
