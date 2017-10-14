---
layout: post
title:  "NPM VS Yarn - Cheatsheet"
date:   2017-10-14
banner_image: yarn.png
tags: [yarn,npm]
---

You've heard about JS package manager called Yarn. If you haven't, please [click here](https://grizzlybit.info/2016/12/13/Yarn-on-the-Rise/). 

>At Facebook we're already using Yarn in production, and it's been working really well for us. It powers the dependency and package management for many of our JavaScript projects. With each migration we've enabled engineers to build offline and helped speed up their workflow. <cite>-  — [Sebastian McKenzie](https://quotecatalog.com/communicator/sebastian-mckenzie/), [Yarn: A new package manager for JavaScript](https://code.facebook.com/posts/1840075619545360)</cite>

If your switching to Yarn from NPM then here is a quick cheatsheet to get you started:

##### What you need to know

* Installation is the default.

	`npm install` === `yarn`

* Packages are saved to your `package.json` by default. 

    `npm install <package> --save` === `yarn add <package> `
<!--more-->
* Adding and removing from package.json is default in Yarn.

	`npm uninstall <package> --save` === `yarn remove <package>`

* Installing dev dependencies

	`npm install <package> --save-dev` === `yarn add <package> --dev`
* Update is actually Upgrade

	`npm update --save` === `yarn upgrade`
* `npm install taco@latest --save` === `yarn add taco`
* Installing global dependencies

	`npm install taco --global` === `yarn global add taco`
* Updating Yarn

	`yarn self-update`

##### Some functionalities remain the same

* `npm init` === `yarn init`
* `npm link` === `yarn link`
* `npm outdated` === `yarn outdated`
* `npm publish` === `yarn publish`
* `npm run` === `yarn run`
* `npm cache clean` === `yarn cache clean`
* `npm login` === `yarn login (and logout)`
* `npm test` === `yarn test`
* `npm install --production` === `yarn --production`

##### New functionalities!

* `yarn licenses ls`
	Allows you to inspect the licenses of your dependencies
* `yarn licenses generate-disclaimer` 
	 Automatically create your license dependency disclaimer
* `yarn why <package>` 
	 Identify why `<package>` is installed
* Yarn supports emojis
* Yarn is considerably faster
* Automatic shrinkwrap with the yarn lockfile
* Security-centric design
* `yarn upgrade-interactive` 
	 Allows you to selectively upgrade specific packages in a simple way

I would highly recommend printing this page and using it as a cheat sheet to begin using yarn.

Code Grizzly!











