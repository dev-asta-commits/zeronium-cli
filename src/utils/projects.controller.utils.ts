import { $ } from "bun";

export const createDir = async (newFolder: string) => {
    try {
        await $`mkdir ${newFolder}`;
    } catch (err) {
        console.log("Error while creating a folder.", err);
    }
};

export const listProjects = async () => {
    try {
        await $`cd ~/Documents/dev_projects`;
        await $`ls -l`;
    } catch (err) {
        console.log("Error while trying to list projects.", err);
    }
};
