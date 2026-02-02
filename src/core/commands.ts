import type { Command } from "commander";
import { initController } from "../controllers/init.controller";

export const init = (program: Command) => {
    program
        .command("init")
        .description("Initializes a new project in the current directory")
        .argument("<name>", "Name of the project")
        .option("-t --tag <tagnames...>", "A list of tags")
        .option("-c --cat <category>", "Category of the project")
        .option("-s --status <status>", "Status of the project", "incomplete")
        .action(initController);
};
