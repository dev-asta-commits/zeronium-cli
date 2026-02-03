import { $ } from "bun";
import { createDir, removeDir } from "../utils/shell.utils";
import { dbCreateProject, dbListProjects } from "../utils/db.utils";

// type imports
import type { projectOptions } from "../types/types";

// database imports

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
        console.log("Error occured in initController", err);
    }
};

export const removeController = (str: string) => {
    try {
        removeDir(str);

        // @ts-expect-error -- random ts error ig??
        console.log("\n Removed a project with the name : ", str.split()[0]);
    } catch (err) {
        console.log("Error in removeController", err);
    }
};

export const projectsController = async (str: string) => {
    try {
        const result = await dbListProjects(str);
        if (!result) {
            console.log("No projects found in the registry...");
        }
        console.log("");
        result!.map((project) => {
            console.log(project.projectname);
        });
    } catch (err) {
        console.log("Error occured in listProjects cotroller", err);
    }
};
