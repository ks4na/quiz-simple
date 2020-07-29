# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？

请直接在这里作答。

答：

- 克隆仓库 `git clone <repo>`
- 在开发分支上创建新功能分支 `git checkout <dev-branch>` 、 `git checkout -b <feat-branch>`
- 开发完功能后提交代码 `git add <files>` 、`git commit`
- 切换到开发分支拉取最新信息 `git pull`
- 切换到新功能分支执行变基操作，可能需要解决冲突 `git rebase <dev-branch>`
- 切换到开发分支，合并新功能分支 `git checkout <dev-branch>` 、 `git merge <feat-branch> (--squash)`
- 推送开发分支到远程 `git push`

## Q2

你知道和用过哪些 Git 的方法论和技巧

答：

- 用过 `rebase` 变基操作，将`dev`分支变成直接下游，由当前分支的开发者负责解决可能存在的冲突，避免`dev` 分支合并时来解决冲突，但是当前分支不能提交到远端仓库
- 用过 `squash` 合并方式，避免开发分支上的提交信息太乱污染 git 提交历史，或者使用 `rebase` 加参数的方式修改当前分支的提交信息
- 用过 `vscode` 的 `git graph` 可视化插件，可以更直观地了解各分支的信息
- 了解过 `git`分支管理方式 `master/dev/feat/hotfix/release` 等，使用过 `master/dev/feat`
