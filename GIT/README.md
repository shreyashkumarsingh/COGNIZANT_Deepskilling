# Git Hands-On Exercises (Tasks 1 to 5)
Digital Nurture 5.0 | .NET Full Stack Engineer Track

This directory contains the solutions and verification documentation for the 5 Git Hands-On Exercises.

---

## Exercise Summary

### Task 1: Git Environment Setup & First Repository (`GitDemo`)
- **Objectives**: Git configuration (`user.name`, `user.email`, default editor setup), repository initialization (`git init`), tracking files (`git add`), and committing (`git commit`).
- **Files Created**:
  - `GitDemo/welcome.txt`: Initial tracked text file.
  - `GitDemo/commands_log.txt`: Complete step-by-step command reference.

### Task 2: Git Ignore Configuration (`.gitignore`)
- **Objectives**: Ignore unwanted files and directories using `.gitignore`.
- **Implementation**:
  - `GitDemo/.gitignore`: Configured with rules for `*.log`, `log/`, `logs/`, `*.orig`, `*.bak`.
  - Tested with `app.log` and `log/debug.log` to confirm untracked status via `git status`.

### Task 3: Branching & Merging
- **Objectives**: Create branch (`GitNewBranch`), commit changes, switch branches (`git checkout`), view differences (`git diff`), merge (`git merge`), inspect logs (`git log --oneline --graph --decorate`), and delete merged branch (`git branch -d`).
- **Files Created**: `GitDemo/feature.txt`.

### Task 4: Conflict Resolution
- **Objectives**: Handle merge conflicts when branches modify the same file (`hello.xml`).
- **Implementation**:
  - Created `GitWork` branch with `hello.xml`.
  - Created conflicting `hello.xml` in main branch.
  - Merged and resolved conflicts in `hello.xml`.
  - Added backup files (`*.orig`, `*.bak`) to `.gitignore`.

### Task 5: Remote Git Clean Up & Push
- **Objectives**: Verify working directory clean status and push all commits to GitHub.
- **Remote Repo**: `https://github.com/shreyashkumarsingh/COGNIZANT_Deepskilling`
