import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
    project_id: integer({ mode: "number" })
        .primaryKey({ autoIncrement: true })
        .notNull(),
    project_name: text().notNull(),
    tags: text({ mode: "json" }),
    category: text().notNull(),
    status: text().notNull(),
    sticky_notes: text(),
    project_path: text().notNull(),
});
