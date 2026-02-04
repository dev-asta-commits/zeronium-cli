# example
```sh
❯ zero projects

zeronium-cli     (incomplete)
test-project     (completed)
❯ zero create another-test-project -t applepie chocopie -c food-test -s completed

Created a project with the name :  another-test-project

 tags :
 1 applepie
 2 chocopie

 category : food-test

 status : completed
❯ ls
 another-test-project
 chat-app
 DIOXUS
 new-chat-app-bun-hono
'Reference projects from github'
 test-project
'trying new tech'
 zeroniumCLI
❯ zero projects

zeronium-cli     (incomplete)
test-project     (completed)
another-test-project     (completed)
❯ zero projects another-test-project

Name     : another-test-project
tags     : applepie, chocopie
category : food-test
status   : completed
location : /home/asta/Documents/dev_projects/another-test-project
```

# zeroniumcli

What's in the name?
Zeronium is a fictional, near-inestructible alloy from the animated series Pluto, by Naoki Urasawa. It is the pinnacle of material science, used to construct the bodies of the world's most advanced robots.

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

### Installation

1. Zeronium depends on the bun runtime. So, make sure to have it installed globally.

You can install bun usin npm :

```sh
npm install -g bun
```

Check their documentation for other options : https://bun.com/docs/installation

2. Install zeronium-cli

```sh
npm install -g zeronium-cli
```

3. Make sure to say yes when you see this prompt since the jump command won't work if you don't.

```sh
Add 'zero jump' to your shell profile? (y/n): 
```


### Commands 
type `zero` in terminal for help

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
