import type { Command } from "commander";
import {
    initController,
    projectsController,
    createController,
} from "../controllers/projects.controller";

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

export const create = (program: Command) => {
    program
        .command("create")
        .description("Initializes a new project in the current directory")
        .argument("<name>", "Name of the project")
        .option("-t --tag <tagnames...>", "A list of tags")
        .option("-c --cat <category>", "Category of the project")
        .option("-s --status <status>", "Status of the project", "incomplete")
        .action(createController);
};

export const projects = (program: Command) => {
    program
        .command("projects")
        .description(
            "jumps to the main project directory and list downs all the projects",
        )
        .option("-t --tag <tagnames...>", "A list of tags")
        .option("-c --cat <category>", "Category of the project")
        .option("-s --status <status>", "Status of the project", "incomplete")
        .action(projectsController);
};
