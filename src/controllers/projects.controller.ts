import { $ } from "bun";
import { createDir, removeDir } from "../utils/shell.utils";
import {
    dbCreateProject,
    dbListProjects,
    dbNukeProjects,
} from "../utils/db.utils";

// type imports
import type { projectOptions } from "../types/types";

export const initController = async (str: string, options: projectOptions) => {
    try {
        await dbCreateProject(str, options);

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
    }
};

export const createController = (str: string, options: projectOptions) => {
    try {
        createDir(str);

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
        } else {
            console.log("");
            if (str) {
                // @ts-expect-error -- typscript just isn't smart enough man...
                const { project_name, tags, category, status, project_path } = [
                    result,
                ];
                console.log(
                    "Name :",
                    project_name,
                    "\ntags :",
                    tags,
                    "\ncategory :",
                    category,
                    "\nstatus :",
                    status,
                    "\nlocation",
                    project_path,
                );
            } else {
                result!.map((project) => {
                    console.log(
                        // @ts-expect-error
                        project.projectname,
                        "   ",
                        `(${project.status})`,
                    );
                });
            }
        }
    } catch (err) {
        console.log("Error occured in listProjects cotroller", err);
    }
};

export const jumpController = async (str: string) => {
    try {
        // todo...
    } catch (err) {
        console.log("Error in jumpController", err);
    }
};
