---
layout: ../../layouts/MarkdownPostLayout.astro
title: An Overview of Git Commands
author: Anthony Ongaro
description: "A high-level overview of my most used git features."
pubDate: 2023-1-20
tags: ["git", "github"]
---
**Bold** is definition, `inline code` is terminal command related.

## Terminology
General terms
- **Working Directory** is your current folder/directory
- **Staging Area** shows files that will be in the next commit (or not)
- **Commit** a 'save point' in  your version control you can always go back to

 Terminal... terms
- `git` a version control system used in software development
- `HEAD` is the most recent commit
- `origin` is the codebase to 'trust' the most (remote, probably on Github)
- `remote` references your remote repository (probably Github)
- `branch` is the current working branch of the git tree

## Getting Started
Initialize a new local repository, stage your files, and start committing them
- `git init` initializes a new local git repository in the current working directory
- `git add <filename>` adds file to the staging area
- `git reset` removes all files from staging area
- `git commit -m '<commit message>'` new commit, use syntax "This commit will..." for msg

## Branches
Work more effectively with coworkers by creating a branch before making changes to a shared repository. This tracks changes under a 'branch' that can then be merged with the main via a pull request
- `git branch <new branch_name>` create a new git branch
- `git branch -d <branch_name>` safely deletes branch assuming merged
- `git checkout <branch_name>` moves to `<branch_name>` branch
- `git checkout -b <branch_name>` does both of the above, combined
- `git checkout -` takes you to last branch you were working on
- `git rebase main` to move your branch's history up to main's `HEAD`
- `git rebase main --interactive` to select which commits to `squash` replaces `pick`
- `git merge <branch_name>` to merge branch you're ON (`main`?) with `<branch_name>`

## Getting Information
- `git status` checks current status of staging area
- `git diff` shows difference between
- `git log` shows log of project's commits use `--graph --oneline` to simplify
- `git remote -v` shows current remote repository connection

## Working with Github
- `git remote add origin <ssh address>` connect initialized local repo to a Github repository
- `git clone <ssh address>` creates a new project folder locally with git init'd to remote 
- `git push -u origin <branch_name>` push last commit to remote, all future pushes can use:
- `git push` push to remote once set up with above
- `git pull` pull down latest changes from Github repository

## Fixing Things
Fix your messed up commit messages  or files forgotten from last commit
- `git commit --amend` opens text editor to modify last commit message
- `git commit --amend -m '<commit_message>'` updates most recent commit to `<commit_message>`
- `git add <file>` then `git commit --amend --no-edit` adds forgotten file to last commit
- `git reset <commit_id>` leaves files 'as-is' but un-commits last commit
- `git reset --hard <commit_id>` deletes last commit and all changes since <!danger>

## Stashing Things
When you are writing code but doesn't work  yet, and you want to save for later without committing your work to the official history
- `git stash` saves your changes since last commit for later in an array
- `git stash pop` brings back your most recent `stash` from end of array
- `git stash save <name>` save a stash with a specific name
- `git stash list` list all available stashes by name
- `git stash apply <index_num>` brings back stash at index position `<index_num>`

## Advanced Git
You can do custom key bindings using aliases