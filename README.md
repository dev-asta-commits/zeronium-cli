# zeroniumcli

What's in the name?
Zeronium is a fictional, near-inestructible alloy from the animated series Pluto, by Naoki Urasawa. It is the pinnacle of material science, used to construc the bodies of the world's most advanced robots.

In our CLI tool, the name serves as the metaphor for stability and infrastructure of the way zeronium handles projects.

##### Core features :

1. Organization : tags, categories, status, sticky notes
2. Fuzzy finder 
3. Filtered search

##### experimental features :

1. zeronium vault


### Core
#### Tags 

A project can have many tags

#### Categories

A project can have only on category

#### Status

Status of the project. Used to specify wheter the project is still in development or it's already completed. A state initialised as "incomplete" by default.

#### Sticky notes

Notes tied to the project. They maybe left empty and are not required.



### Experimental
#### Vault

Immutable backups. 

### Commands 
#### `init`

Used to the current directory as a project and register it.

#### `create`

Used to create a new directory in the current directory and initialize it as a project

#### `destroy`

Used to de-initialize a directory as a project and remove it from the registry.

#### `find`

Used to fuzzy-find a project.

### Flags
#### `--tag`

Used to assign a tag

#### `--cat`

Used to assign a category

#### `--status`

Used to define the status of the project. By default, the status is set to incomplete
