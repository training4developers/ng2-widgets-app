# Angular 2 Widgets Sample Application

## Overview

This is a simple CRUD application demonstrating the essentials of Angular 2 including HTTP services, routing, forms, composing components and unit testing. The base project configuration is adapted from the [Angular 2 Webpack Stater project](https://angular.io/docs/ts/latest/guide/webpack.html).

## Application Setup

Step 1. Install Node.js version 6 or higher. To install Node.js click [https://nodejs.org](here).

Step 2. Download this repository from [https://github.com/training4developers/ng2-widgets-app/archive/master.zip](here). Extract the zip file to a working on your system.

Step 3. Open a terminal window, change to the folder where you extracted the zip file to. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following commands:

```bash
$ npm i

$ npm start
```

Step 5. Open a web browser, and navigate to [http://localhost:3000](http://localhost:3000).  The Angular 2 web application should load and be usable.

**To Modify the Web Application**

Step 6. Open a new terminal window, change to the project folder.

Step 7. From the terminal, run the following command:

```bash
$ npm run webpack
```

Step 8. Open your favorite text editor (such as [https://atom.io/](Atom) or (https://code.visualstudio.com)[Visual Studio Code]), and modify the files in the **src/www** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets, and deploy it to the **dist** folder. To see the changes, reload your web browser.

## Running Unit Tests
