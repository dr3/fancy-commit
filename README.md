<h1 align="center">✨ fancy-commit ✨</h1>

<div align="center">

Ohhh so fancy. Super simple cli for writing fancy commit messages

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/dr3/fancy-commit)

</div>

![example gif](https://user-images.githubusercontent.com/11341355/51806401-6c971400-2271-11e9-8185-1c3bde5d334d.gif)

![image](https://user-images.githubusercontent.com/11341355/51806434-c13a8f00-2271-11e9-8c89-38f78c2b154c.png)

## 🚀 Install
```
npm install -g fancy-commit
```

## 🦁 Alias
I chose the name `fancy-commit` as it was nice and wouldn't clash with any other cli tool. I recomend aliasing it to something else in your command line. For bash I add the following line to my `.bashrc` file 😊
```
alias gc='fancy-commit'
```

## Usage

The basic functionality of this package can be run simply via `fancy-commit`. On its own, this command will use default values for all settings. This can be overwritten via config however!

## Commands

### - `fancy-commit setup`

This command will write a config file for you to change. It will be located in your home directory and called `.fancy_commit`.

### - `fancy-commit reset`

Mess up your config file? This command will reset it to the defaults.

### - `fancy-commit clean`

Don't need custom config? Run this command to delete your `.fancy_commit` file.

## Config

fancy-commit is built on config and offers a whole bunch of settings you can change to your liking.

#### - `prompts`

An array of commit prompts for you to use. Array items be in the format of `{ text: 'Feature', emoji: '🚀' }`.

#### - `skipVerifyingCommit`

Skip verifying your commit. Adds `--no-verify` to the commit to skip and pre-commit checks.

| default | possible values                     |
|---------|-------------------------------------|
| `ask_n` | `always`, `never`, `ask_y`, `ask_n` ([prompt config](https://github.com/dr3/fancy-commit#prompt-config)) |

#### - `allowEmptyCommit`

Allow commits to be empty.

| default | possible values                     |
|---------|-------------------------------------|
| `ask_n` | `always`, `never`, `ask_y`, `ask_n` ([prompt config](https://github.com/dr3/fancy-commit#prompt-config)) |

#### - `signCommits`

Sign your git commits. Most commonly used to GPG sign your commits.

| default  | possible values                     |
|----------|-------------------------------------|
| `always` | `always`, `never`, `ask_y`, `ask_n` ([prompt config](https://github.com/dr3/fancy-commit#prompt-config)) |

#### - `warnNoChanges`

Warn you if your trying to make a commit with no changes.

| default | possible values |
|---------|-----------------|
| `true`  | `true`, `false` |

#### - `mustBeInsideWorkingTree`

Exit `fancy-commit` if youre not inside a git working tree.

| default | possible values |
|---------|-----------------|
| `true`  | `true`, `false` |

#### - `useGithubEmoji`

Use github emoji markup in commit messages in place of Unicode emoji chracters. e.g. `:dog:` instead of 🐶.

| default | possible values |
|---------|-----------------|
| `true`  | `true`, `false` |

---

### Prompt config

Prompt config has 4 possible values 

- `always` - Don't Ask, just always do it.
- `never` - Don't Ask, but never do it.
- `ask_y` - Ask every time, defaulting to `'y'` (yes).
- `ask_n` - Ask every time, defaulting to `'n'` (no).
