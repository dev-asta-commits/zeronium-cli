import { $ } from "bun";

export const createDir = async (dirName: string) => {
    try {
        await $`mkdir ${dirName}`;
    } catch (err) {
        console.log("Error while creating a directory.", err);
    }
};

export const removeDir = async (dirName: string) => {
    try {
        await $`rm -rf ${dirName}`;
    } catch (err) {
        console.log("Error while deleting a directory.", err);
    }
};

export const getPath = async () => {
    try {
        const path = await $`pwd`.text();
        return path;
    } catch (err) {
        console.log("Error while tryin to get current directory's path", err);
        return "";
    }
};
