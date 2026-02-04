import { eq } from "drizzle-orm";

import { db } from "@/db/connection";
import { projects } from "@/db/schema/project.schema";

// type imports
import type { projectData, projectOptions } from "@/types/types";

import { getPath } from "@/utils/shell.utils";

export const dbInitProject = async (str: string, options: projectOptions) => {
    try {
        let tags = {};
        if (options.tag) {
            options.tag.forEach((tag, i) => {
                // @ts-expect-error
                tags[i + 1] = tag;
            });
        }

        let path: string;
        if (!options.path) {
            path = await getPath();
        } else {
            path = options.path;
        }

        const projectData: projectData = {
            project_name: str,
            // todo: implement multiple tags handling
            tags,
            category: options.cat,
            status: options.status,
            project_path: path!,
        };

        const insertedProject = await db.insert(projects).values(projectData);
    } catch (err) {
        console.log("Error in dbCreateProject function", err);
        process.exit();
    }
};

export const dbCreateProject = async (
    str: string,
    options: projectOptions,
    path: string,
) => {
    try {
        let tags = {};
        if (options.tag) {
            options.tag.forEach((tag, i) => {
                // @ts-expect-error
                tags[i + 1] = tag;
            });
        }

        const projectData: projectData = {
            project_name: str,
            // todo: implement multiple tags handling
            tags,
            category: options.cat,
            status: options.status,
            project_path: path,
        };

        const insertedProject = await db.insert(projects).values(projectData);
    } catch (err) {
        console.log("Error in dbCreateProject function", err);
        process.exit();
    }
};

export const dbRemoveProject = async (str: string, options: projectOptions) => {
    try {
        const project_name = str;
        const { tag, cat, status, path } = options;

        if (project_name) {
            const [removed] = await db
                .delete(projects)
                .where(eq(projects.project_name, project_name))
                .returning();

            if (removed) {
                console.log(
                    "Removed the following project from registry : \n",
                    project_name,
                );
                process.exit();
            }

            console.log("Project doesn't exist...");
        }
    } catch (err) {
        console.log("Error in dbRemoveProject", err);
    }
};

export const dbListProjects = async (str?: string) => {
    try {
        if (str) {
            const result = await db
                .select({
                    project_name: projects.project_name,
                    tags: projects.tags,
                    category: projects.category,
                    status: projects.status,
                    project_path: projects.project_path,
                })
                .from(projects)

                .where(eq(projects.project_name, str));

            return result;
        }

        const result = await db
            .select({
                projectname: projects.project_name,
                status: projects.status,
            })
            .from(projects);

        return result;
    } catch (err) {
        console.log("Error while querying the database to list projects", err);
        process.exit();
    }
};

export const dbNukeProjects = async () => {
    await db.delete(projects);
};
