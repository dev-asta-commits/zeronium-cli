import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { projects } from "../db/schema/project.schema";
import type { projectData, projectOptions } from "../types/types";

export const dbCreateProject = async (str: string, options: projectOptions) => {
    // let serialisedList = {}

    // for (let i = 0; i < options.tag.length; i++) {
    //     serialisedList = {...options.tag[i]}
    // }

    // todo: serialize the tags and store it.

    try {
        const projectData: projectData = {
            // @ts-expect-error
            project_name: str.split()[0],

            category: options.cat,
            status: options.status,
            project_path: options.path,
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
                .select({ projectname: projects.project_name })
                .from(projects)
                // @ts-expect-error
                .where(eq(projects.project_name, str.split()[0]));

            return result;
        }

        const result = await db
            .select({ projectname: projects.project_name })
            .from(projects);

        return result;
    } catch (err) {
        console.log("Error while querying the database to list projects", err);
    }
};
