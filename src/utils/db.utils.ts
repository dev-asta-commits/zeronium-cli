import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { projects } from "../db/schema/project.schema";

// type imports
import type { projectData, projectOptions } from "../types/types";

import { getPath } from "./shell.utils";

export const dbCreateProject = async (str: string, options: projectOptions) => {
    // let serialisedList = {}

    // for (let i = 0; i < options.tag.length; i++) {
    //     serialisedList = {...options.tag[i]}
    // }

    // todo: serialize the tags and store it.

    try {
        let path: string;
        if (!options.path) {
            path = await getPath();
        } else {
            path = options.path;
        }

        const projectData: projectData = {
            // @ts-expect-error
            project_name: str.split()[0],
            // todo: implement multiple tags handling
            category: options.cat,
            status: options.status,
            project_path: path!,
        };

        const insertedProject = await db.insert(projects).values(projectData);

        console.log("Project added to database : ", insertedProject);
    } catch (err) {
        console.log("Error in dbCreateProject function", err);
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
                // @ts-expect-error
                .where(eq(projects.project_name, str.split()[0]));

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
        return [];
    }
};

export const dbNukeProjects = async () => {
    await db.delete(projects);
};
