import { eq } from "drizzle-orm";

import { jumpToDir } from "@/utils/shell.utils";
import { projects } from "@/db/schema/project.schema";
import { db } from "@/db/connection";

// type imports
import type { jumpOptions } from "@/types/types";

export const jumpController = async (str: string, options: jumpOptions) => {
    try {
        const project_name = str;
        const { recent } = options;

        if (!recent && !str) {
            console.log(
                "Please specify a project or use the -r flag to move to the most recent project.",
            );
            process.exit();
        }

        if (project_name) {
            const [result] = await db
                .select({ project_path: projects.project_path })
                .from(projects)
                .where(eq(projects.project_name, project_name));

            if (result) {
                await jumpToDir(result?.project_path!);
                process.exit();
            }

            console.log("Please specify a valid project name.");
            process.exit();
        }
    } catch (err) {
        console.log("Error in jumpController", err);
        process.exit();
    }
};
