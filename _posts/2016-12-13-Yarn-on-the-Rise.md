---
layout: post
title:  "Yarn on the Rise"
date:   2016-12-13
banner_image: yarn.png
tags: [javascript]
---

> Titans such as Facebook and Google have teamed up to make a faster and better package manager in comparison to npm. It is called Yarn. Though, don’t be alarmed this package management tool takes packages from NpmJS and Bower registries supporting parallel dependency installations.

<!--more-->

Current flaws with npm:

+ Nested dependencies: npm version 2 nests dependencies which lead to duplicates, and as a user of windows, file paths may get long which causes problems with windows when trying to delete them. To fix this problem, use npm version 3.
+ Queued install: when npm gets dependencies from its repository, it installs each dependency one after the other which might end up using a lot of time.
+ Single registry: If a package is not on NpmJS, forget about it.
+ No offline installation.

So most importantly a single request failing won’t cause an install to fail. Requests are retried. If you’re used to npm, Yarn behaves the same way, merely it complements the workflow.

Official page: https://yarnpkg.com/

There is a special file that is updated after every install, upgrade or removal of project dependencies called a yarn.lock file. It is a good idea to include this in the VCS for package version consistency.

Another file is a .yarnclean file , which is updated after you run a “yarn clean” (quite similar to its npm counterpart). If a .yarnclean file is present before you run yarn install, it will clean each package before installing it. Yet again, good idea to include it in the VCS.

Having a good enough backing this could be the defacto package manager of the near future…