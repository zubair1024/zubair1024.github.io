---
layout: post
title:  "GIT Cheat Sheet"
date:   2016-09-26
banner_image: Git.jpg
tags: [tips and tricks, GIT]
---

We can all agree that git has become everyone’s favorite versioning system lately. Having experience with SVN and Git I can safely say that Git is not actually better but it is different. The key advantage is that it is decentralized. With Git, you can do practically anything offline, because everybody has their own repository. Making branches and merging between branches has never been easier. Git is complex, powerful and fast (since it works for Linux kernel of course). Every company and business setup has its own workflow and with SVN in my company we had a tough time adopting the version system with our business case. Git is very flexible and with its ```TIMTOWTDI``` approach will help is meet our goals. Well, everything has its pros and cons even though the pros will obviously outrun the cons, note that Git is much harder to learn, lacks a good GUI and revisions do not have version numbers. Below I have complied a few necessary git commands in the form of a cheat sheet:

<!--more-->

#### Configuration:

{% highlight bash %} $ git config --global user.name "[name]" {% endhighlight %}
Sets the name you want to commit with.

{% highlight bash %} $ git config --global user.email "[email address]" {% endhighlight %}
Sets the email Address you want the author to have.

The most useful config you need to start with is

{% highlight bash %} $ git config --global color.ui auto {% endhighlight %}
Sets to colorize the command line.

#### Creating a New Repository:

{% highlight bash %} $ git init {% endhighlight %}
Initializes a new repository

{% highlight bash %} $ git clone ssh://user@domain.com/repo.git$ git clone username@host:/path/to/repository$ git clone /path/to/repository {% endhighlight %}

Clones an existing repository.

Adding Files to be Tracked:

{% highlight bash %} $ git add {% endhighlight %}
Adds the specified file.

{% highlight bash %} $ git add . {% endhighlight %}
Adds all files.

#### Tracking Changes:

{% highlight bash %} $ git status {% endhighlight %}
List all new or modified files to be committed

{% highlight bash %} $ git diff {% endhighlight %}
Shows file difference not yet staged.

{% highlight bash %} $ git log {% endhighlight %}
Shows all commits

{% highlight bash %} $ git log --oneline {% endhighlight %}
Show all commits summaried each in one line.

{% highlight bash %} $ git log -p {% endhighlight %}
Shows changes for a specific file 

{% highlight bash %} $ git diff --staged {% endhighlight %}
Shows file differences between staging and the last file version

{% highlight bash %} $ git blame {% endhighlight %}
Tracking changes on a file about who changed what and when (annotated).

#### Committing changes:

{% highlight bash %} $ git commit -m 'commit message' {% endhighlight %}
Commit changes to head

{% highlight bash %} $ git commit -a {% endhighlight %}
Commit any file you have added with git add or modified an added file.

{% highlight bash %} $ git remote add origin {% endhighlight %}
If you haven’t connected your local repository to a remote server, add the server to be able to push to it

{% highlight bash %} $ git remote -v {% endhighlight %}
List all currently configured remote repositories:

{% highlight bash %} $ git push origin master {% endhighlight %}
Sends the changes to the master branch on the remote repository

{% highlight bash %} $ git push {% endhighlight %}
Publish local changes on a remote

Branching and Related Commands:

{% highlight bash %} $ git branch {% endhighlight %}
List all existing branches

{% highlight bash %} $ git branch {% endhighlight %}
Creates a new branch based on your current head

{% highlight bash %} $ git checkout {% endhighlight %}
Checkout a specified branch

{% highlight bash %} $ git branch -d {% endhighlight %}
Deletes a specified branch

{% highlight bash %} $ git merge {% endhighlight %}
Merge into the current head

{% highlight bash %} $ git rebase {% endhighlight %}
Rebase current head onto the branch

{% highlight bash %} $ git tag {% endhighlight %}
Mark the current commit with a tag name.

#### Fetching Commits:

{% highlight bash %} $ git fetch {% endhighlight %}
Download all changes from , but don’t integrate into head

{% highlight bash %} $ git pull {% endhighlight %}
Download changes from and merge into head

#### File System:

{% highlight bash %} $ git rm {% endhighlight %}
Deletes the specified file form the working directory and stages the deletion.

{% highlight bash %} $ git rm --cached {% endhighlight %}
Deletes the file from the version control system but preserves the file locally in the working directory.

{% highlight bash %} $ git mv < original-filename>
$ git lis-files --other --ignored --exclude-standard {% endhighlight %}
List all ignored files in working project directory

#### Stashes:

{% highlight bash %} $ git stash {% endhighlight %}
Temporarily stores all modified tracked files

{% highlight bash %} $ git stash pop {% endhighlight %}
Restores the most recently stashed files

{% highlight bash %} $ git stash list {% endhighlight %}
Lists all stashed changesets

{% highlight bash %} $git stash drop {% endhighlight %}
Discards the most recently stashed changeset

#### Reverting and Re-doing:

{% highlight bash %} $ git reset {% endhighlight %}
Unstages the specified file, but preserve its contents

{% highlight bash %} $ git reset {% endhighlight %}
Undoes all commits after [commit] , preserving changes locally

{% highlight bash %} $ git reset --hard [commit] {% endhighlight %}
Discards all history and changes back to the specified commit

{% highlight bash %} $ git revert {% endhighlight %}
Revert a commit by producing a new commit with contrary changes

Happy committing!