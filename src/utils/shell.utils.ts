import { $ } from "bun";

export const createDir = async (dirName: string) => {
    try {
        await $`mkdir ${dirName}`;
        const path = await $`cd ${dirName} ; pwd`.text();
        return path;
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
        console.log("Error while trying to get current directory's path", err);
        return "";
    }
};

export const jumpToDir = async (path: string) => {
    try {
        process.stdout.write(path.trim());
        process.exit(0);
    } catch (err) {
        console.log("Error while moving to directory");
        console.log(
            "Make sure to configure your shell before using this command",
        );
        process.exit();
    }
};
