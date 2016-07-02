# Angular 2 Project Configuration

The following configuration files are used to configure the project.

## Application Configuration

The following configuration information pertains to the configuration of the application once development has been completed.

### Configuration Files

- /package.json - Contains information about the project, including application and development dependencies. The command line scripts are defined here. The web server configuration is located at the end of the file. To change protocol, port number, domain and root folder, please edit these values in this file.
- /config.js - Contains code to extract web server configuration from the package.json file.
- /index.js - Used to start the web server. It loads the web server config from package.json, then passes the config to /src/server.ts to fire up the REST server.

### Process Flow

Run **npm start** from a terminal, the web server configuration is loaded from **package.json**, and the Express-based web server is started. Based upon the default configuration, the web site can be loaded from http://localhost:3000, and the widgets REST service is available via http://localhost:3000/api/widgets.

#### Widgets REST Endponts

GET /api/widgets -> returns a JSON formatted array of widget objects
POST /api/widgets -> the request body should contain a JSON formatted widget object,
returns a JSON formatted widget object with the id, created and modified fields updated

GET /api/widgets/<widget id> -> a JSON formatted widget object
PUT /api/widgets/<widget id> -> the request body should contain a JSON formatted widget object, returns a JSON formatted widget objects with the modified field updated
DELETE /api/widgets/<widget id> -> returns a JSON formatted widget object of the widget deleted

## Development Configuration

The following configuration information pertains to the development of the application.

### Configuration Files

- /.gitignore - Indicates which files are to be ignored by Git. Generally, this includes downloaded packages, and the output files of the development processes such as Webpack and TypeScript compilation.
- /.bootstraprc - Indicates the Bootstrap CSS library configuration for the Typescript bootstrap loader used by **/src/vendor.ts** and outputed with the Webpack vendor bundle. Only the CSS portions of Bootstrap are loaded, not the JavaScript components. Therefore, jQuery is not included. 
- /.htmlhintrc - Configuration file for HTML linting for the Atom editor. May work with other editors.
- /.npmrc - Used to configure **npm** for the project. Typically, used to configure proxy servers.
- /.typingsrc - Used to configure **typings** for the project. Typically, used to configure proxy servers.
- /tsconfig.json
- /typings.json
- /config/helpers.js
- /config/webpack.common.js
- /config/webpack.dev.js

### Process Flow

## Testing Configuration

The following configuration information pertains to running the unit testing and code coverage tools of the application.

### Configuration Files

- /config/custom-launchers.js
- /config/karma-test-shim.js
- /config/karma.conf.js
- /config/webpack.test.js

### Process Flow