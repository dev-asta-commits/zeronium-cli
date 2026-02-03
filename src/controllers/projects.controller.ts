import { $ } from "bun";
import { createDir, listProjects } from "../utils/projects.controller.utils";

// type imports
import type { initOptions } from "../types/types";

// database implementation to be added

export const initController = (str: string, options: initOptions) => {
    try {
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

export const projectsController = () => {
    try {
        listProjects();
    } catch (err) {
        console.log("Error occured in listProjects cotroller", err);
    }
};

export const createController = () => {};
