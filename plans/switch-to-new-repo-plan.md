# Repository Switch Plan: Windsor to New Repository

## Objective

Push all files from the local repository to a new GitHub repository: `https://github.com/windsoradmin0-cmd/Windsor`

## Current State

- **Local Repository**: `c:\Users\karl\Projects\Windsor - Copy`
- **Current Remote**: `https://github.com/menunri/Windsor` (origin)
- **Target Remote**: `https://github.com/windsoradmin0-cmd/Windsor`
- **Current Branch**: `main`
- **Last Push**: `e881a2b..bec32d6 main -> main` (to old repo)

## Steps to Execute

### Step 1: Verify Repository Status

```bash
git status
git remote -v
git branch -a
```

**Goal**: Confirm working tree is clean or identify uncommitted changes

### Step 2: Commit Any Pending Changes (If Needed)

If there are uncommitted changes:

```bash
git add -A
git commit -m "Your commit message"
```

### Step 3: Change Remote URL

```bash
git remote set-url origin https://github.com/windsoradmin0-cmd/Windsor.git
```

**Goal**: Point the origin remote to the new repository

### Step 4: Verify Remote Change

```bash
git remote -v
```

**Expected Output**:

```
origin  https://github.com/windsoradmin0-cmd/Windsor.git (fetch)
origin  https://github.com/windsoradmin0-cmd/Windsor.git (push)
```

### Step 5: Push to New Repository

```bash
git push -u origin main --force
```

**Note**: `--force` may be needed if the new repository has different history

### Step 6: Push Tags (If Any Exist)

```bash
git push origin --tags
```

## Potential Issues & Solutions

| Issue                   | Solution                                        |
| ----------------------- | ----------------------------------------------- |
| New repo has no commits | Use `--force` to overwrite empty history        |
| Authentication fails    | Ensure GitHub credentials are configured        |
| Protected branch        | May need to disable protection in repo settings |

## Verification

After push, verify at: `https://github.com/windsoradmin0-cmd/Windsor`
