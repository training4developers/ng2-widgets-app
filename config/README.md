# Angular 2 Project Configuration

The following configuration files are used to configure the project.

## Application Configuration

### Configuration Files

- /package.json - Contains information about the project, including application and development dependencies. The command line scripts are defined here. The web server configuration is located at the end of the file. To change protocol, port number, domain and root folder, please edit these values in this file.
- /config.js - Contains code to extract web server configuration from the package.json file.
- /index.js - Used to start the web server. It loads the web server config from package.json, then passes the config to /src/server.ts to fire up the REST server.

### Process Flow

Run **npm start** from a terminal, the web server configuration is loaded from **package.json**, and the Express-based web server is started. Based upon the default configuration, the web site can be loaded from http://localhost:3000, and the widgets REST service is available via http://localhost:3000/api/widgets.

Widgets REST Endponts

GET /api/widgets -> an array of widgets

## Development Configuration

### Configuration Files

- /.gitignore
- /.bootstraprc
- /.htmlhintrc
- /.npmrc
- /.typingsrc
- /tsconfig.json
- /typings.json
- /config/helpers.js
- /config/webpack.common.js
- /config/webpack.dev.js

### Process Flow

## Testing Configuration

### Configuration Files

- /config/custom-launchers.js
- /config/karma-test-shim.js
- /config/karma.conf.js
- /config/webpack.test.js

### Process Flow