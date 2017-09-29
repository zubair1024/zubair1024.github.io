---
layout: post
title:  "How to Automate an npm install if package.json is Modified using Git Hooks"
date:   2016-12-12
banner_image: integrate.jpg
tags: [tips and tricks, GIT]
---

Currently, most (if not all) of my projects contain a package.json which is frequently modified to manage my dependencies in the project. But when collaborating we usually have to checked with every git pull to see if the package.json has been changed, if so we ensure that that we do a npm install. This in most cases is a bottleneck and frequently leads to errors.

<!--more-->

Let’s Automate this Task using Git Hooks

So, we use git hook to trigger npm install if a package.json file has been updated. In the .git/hooks folder you can put a post-merge file containing the following content:

{% highlight bash %}
changed_files="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"

check_run() {
    echo "$changed_files" | grep --quiet "$1" && eval "$2"
}
check_run package.json "npm install"
{% endhighlight %}

Boom! Job done! Now you do not need to remember steps that are needed to be executed with every git pull.