export type projectOptions = {
    tag: Array<string>;
    cat: string;
    status: string;
    path: string;
};

export type jumpOptions = {
    recent?: boolean;
};

export type projectData = {
    project_name: string;
    tags?: {};
    category: string;
    status: string;
    project_path: string;
};
