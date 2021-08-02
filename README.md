# Alpaca-Snake-Game Development Setup

## Installation 
```
git clone https://github.com/KarenMTan/Alpaca-Snake-Game
cd Alpaca-Snake-Game
npm install --save
```

## To Run: 
Android: 
```
npm run android 
```

iOS: 
```
npm run ios 
```

## Pushing to Github
```diff
# check what files you have been working on
git status

# if there are any files that you do not want to add
git reset HEAD <file>

# if you want to revert the file back to the original working state (before any changes)
git checkout -- <file>

# add all files that you have been worked on (if you're on another branch)
git add <file> # adds a specific file
git add . # adds all files

## skip this if you have already created a new branch/already are on the branch
# checkout a new branch, (naming convention should be the feature that you're working on)
git checkout -b <branch name>

# create a commit message, from the files that you've changed
# this commit message should be clear, concise, and summarize your changes 
git commit -m "<string>"

# push your changes to the remote repo
git push

# get the latest changes from the master branch of the remote repository
# and merge them into your current working branch. you have to manually resolve any merge
# conflicts that occur
git merge origin/master

# push your changes + whatever was merged from the master branch onto your branch
# only if master has changes
git push

# if you have not pushed your branch yet
git push --set-upstream origin <branch name>

# you can submit your PR on GitHub after all these steps
```
