import type { Command } from "commander";

export const projectOptions = (command: Command) => {
    command
        .option("-t --tag <tagnames...>", "A list of tags")
        .option("-c --cat <category>", "Category of the project")
        .option("-s --status <status>", "Status of the project", "incomplete")
        .option("-p --path <path>", "Path of the project directory");
};
