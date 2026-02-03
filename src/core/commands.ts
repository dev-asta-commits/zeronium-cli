import { program, type Command } from "commander";

import { projectOptions } from "./options";

import {
    initController,
    projectsController,
    createController,
    removeController,
    nukeController,
    jumpController,
} from "../controllers/projects.controller";

export const init = (program: Command) => {
    const init = program
        .command("init")
        .description("Initializes a new project in the current directory")
        .argument("<name>", "Name of the project")
        .action(initController);

    projectOptions(init);
};

export const create = (program: Command) => {
    const create = program
        .command("create")
        .description("Initializes a new project in the current directory")
        .argument("<name>", "Name of the project")
        .action(createController);

    projectOptions(create);
};

export const remove = (program: Command) => {
    const remove = program
        .command("remove")
        .description("Removes an existing project")
        .argument("<name>", "Name of the project")
        .action(removeController);
};

export const nuke = (program: Command) => {
    const nuke = program
        .command("nuke")
        .description("Nuke all the projects from the registry.")
        .action(nukeController);
};

export const projects = (program: Command) => {
    const projects = program
        .command("projects")
        .argument("[name]", "Name of the project")
        .description("List all available projects in the registry")
        .action(projectsController);

    projectOptions(projects);
};

export const jump = (program: Command) => {
    const jump = program
        .command("jump")
        .description("Jump to a secific project directory")
        .argument("<name>", "Name of the project")
        .action(jumpController);
};
