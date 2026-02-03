import { $ } from "bun";
import { createDir, removeDir } from "@/utils/shell.utils";
import {
    dbInitProject,
    dbCreateProject,
    dbListProjects,
    dbNukeProjects,
} from "@/utils/db.utils";

// type imports
import type { projectOptions } from "@/types/types";

export const initController = async (str: string, options: projectOptions) => {
    try {
        await dbInitProject(str, options);

        // @ts-expect-error -- idk some random ts error ig??
        console.log("\nCreated a project with the name : ", str.split()[0]);
        if (options.tag) {
            console.log("\n tags : ");
            for (let i = 0; i < options.tag.length; i++) {
                console.log("", i + 1, options.tag[i]);
            }
        }
        if (options.cat) console.log("\n category :", options.cat);
        console.log("\n status :", options.status);
    } catch (err) {
        console.log("Error occured in initController", err);
        process.exit();
    }
};

export const createController = async (
    str: string,
    options: projectOptions,
) => {
    try {
        const path = await createDir(str);
        await dbCreateProject(str, options, path!);

        // @ts-expect-error -- idk some random ts error ig??
        console.log("\nCreated a project with the name : ", str.split()[0]);
        if (options.tag) {
            console.log("\n tags : ");
            for (let i = 0; i < options.tag.length; i++) {
                console.log("", i + 1, options.tag[i]);
            }
        }
        if (options.cat) console.log("\n category :", options.cat);
        console.log("\n status :", options.status);
    } catch (err) {
        console.log("Error occured in createController", err);
        process.exit();
    }
};

export const removeController = (str: string) => {
    try {
        removeDir(str);

        // @ts-expect-error -- random ts error ig??
        console.log("\nRemoved a project with the name : ", str.split()[0]);
    } catch (err) {
        console.log("Error in removeController", err);
    }
};

export const nukeController = () => {
    try {
        dbNukeProjects();
        console.log("Successfully removed all projects from the registry");
    } catch (err) {
        console.log("Error in nukeController", err);
    }
};

export const projectsController = async (str: string) => {
    try {
        const result = await dbListProjects(str);
        if (result?.length == 0) {
            console.log("No projects found in the registry...");
            process.exit();
        } else {
            console.log("");
            if (str) {
                const [project] = result;

                // project.tag
                // @ts-expect-error -- idk man
                const { project_name, tags, category, status, project_path } =
                    project;

                const tagNames = tags ? Object.values(tags).join(", ") : "none";

                console.log(
                    `Name     : ${project_name}`,
                    `\ntags     : ${tagNames}`, // tags is often an object/array
                    `\ncategory : ${category}`,
                    `\nstatus   : ${status}`,
                    `\nlocation : ${project_path}`,
                );
                process.exit();
            } else {
                result!.map((project) => {
                    console.log(
                        // @ts-expect-error
                        project.projectname,
                        "   ",
                        `(${project.status})`,
                    );
                });
                process.exit();
            }
        }
    } catch (err) {
        console.log("Error occured in listProjects cotroller", err);
        process.exit();
    }
};

export const jumpController = async (str: string) => {
    try {
        // todo...
    } catch (err) {
        console.log("Error in jumpController", err);
    }
};
