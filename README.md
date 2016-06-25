# Angular 2 Widgets Sample Application

## Overview

This is a simple CRUD (create, read, update & delete) application demonstrating the essentials of Angular 2 including HTTP services, routing, forms, composing components and unit testing. The base project configuration is adapted from the [Angular 2 Webpack Stater project](https://angular.io/docs/ts/latest/guide/webpack.html).

## Application Setup

Step 1. Install Node.js version 6 or higher. To install Node.js click [here](https://nodejs.org).

Step 2. Download this repository from [here](https://github.com/training4developers/ng2-widgets-app/archive/master.zip). Extract the zip file to a working on your system.

Step 3. Open a terminal window, change to the folder where you extracted the zip file to. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
$ npm i && npm start
```

It could take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** and **.typingsrc** files per the instructions in those files. Then re-run the command above.

Step 5. Open a web browser, and navigate to [http://localhost:3000](http://localhost:3000).  The Angular 2 web application should load and be usable.

**To Modify the Web Application**

Step 6. Open a new terminal window, change to the project folder.

Step 7. From the terminal, run the following command:

```bash
$ npm run webpack
```

Step 8. Open your favorite text editor (such as [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com)), and modify the files in the **src/www** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets, and deploy it to the **dist** folder. To see the changes, reload your web browser.

Visual Studio Code supports TypeScript out of the box. Atom requires the 	**atom-typescript** package to be installed. To install it from the menu bar, goto Packages -> Settings View -> Install Packages/Themes. Search for **atom-typescript**, then click **Install**. Sometimes Atom will not be able to download the package because of proxy settings. To resolve this run the following commands from a terminal window, replacing the localhost URL with your proxy URL setting:

```bash
$ apm config set proxy "http://localhost:8080"

$ apm config set https_proxy "http://localhost:8080"

$ apm config set strict-ssl false
```

Restart Atom, then re-attempt to install the **atom-typescript** package again.

## Running Unit Tests

## NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - starts the web server
- **npm test** - starts karma to run unit tests
- **npm run clean** - remove the **dist** folder
- **npm run typings** - install TypeScript type definitions as specified in the **typings.json** file
- **npm run build** - removes the dist folder, builds and deploys the server app, and the web app
- **npm run webpack** - runs webpack in watch mode so web app file changes are automatically processed, and deployed to the **dist/www** folder
- **npm run webpack-once** - runs webpack once to process web app files, and deploys them to the **dist/www** folder
- **npm run server** - builds the server application, and deploys it to the **dist** folder
