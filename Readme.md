# CodeceptJS Nightmare Test Harness

The following repository provides a basic structure for testers to quickly spin
up their own automation projects using [CodeceptJS](http://codecept.io/) and [Nightmare](http://www.nightmarejs.org/).

## Setup Info
First, to install the necessary packages run `npm install`. This will install
the following packages:
 * CodeceptJS
 * CodeceptJS-Nightmare
 * Nightmare
 * Nightmare-upload
 * Mochawesome

*Tip*: If you run into `SyntaxError: Unexpected token )`, you can follow the
suggestions on this [issue](https://github.com/Codeception/CodeceptJS/issues/837)
to clear things up.

This repo has already initialized a codeceptjs-nightmare project. However, if you
want to initialize a new project, simply delete `codecept.json`, run
`codeceptjs init`, and follow the prompts.

## Additional Test Setup
CodeceptJS provides generators for different parts of your tests. We have already
provided a few samples you can use as templates. To generate any new files, you
can run the following:
 * **Test Scenarios**: `codeceptjs gt`
 * **Page Objects**: `codeceptjs gpo`
 * **Page Fragments** (modals or widgets, for example): `codeceptjs go --type fragment`
 * **Step Objects**: `codeceptjs go --type step`

Each generator will update the includes section of `codecept.json`.

## Running Tests
Once everything is installed, you can simply execute `npm tests` to run
the existing test. The `codecept.json` file houses the configurations needed to
run tests. Here is a portion of that file with notes on important features:

```javascript
{
  "output": "./output", // screenshots for failures
  "helpers": {
    "Nightmare": {
      "url": "https://moduscreate.com/",
      "show": true, // tests run in a window
      "restart": false // uses a single browser instance
    }
  },
  "include": { // set up by codeceptjs generators
    "modusHomePage": "./pages/modusHomePage.js",
    "modusEmailModalFragment": "./fragments/modusEmailModal.js",
    "navigateHomePageStep": "./steps/navigateHomePageStep.js"
  }
}
```

### Tags
CodeceptJS offers the ability to group scenarios using tags. This gives you
greater flexibility in how you organize tests.

```javascript
Scenario('Navigate to Home Page @home', () => {});
```
To run based on tags, execute `codeceptjs run --grep @tagName`. [CodeceptJS](http://codecept.io/advanced/)
also provides more advanced regex filtering.

* `--grep (?=.*@smoke2)(?=.*@smoke3)` - run tests with @smoke2 and @smoke3 in name
* `--grep @smoke2|@smoke3` - run tests with @smoke2 or @smoke3 in name
* `--grep ((?=.*@smoke2)(?=.*@smoke3))|@smoke4` - run tests with (@smoke2 and @smoke3) or @smoke4 in name
* `--grep (?=.*@smoke2)^(?!.*@smoke3)` - run tests with @smoke2 but without @smoke3 in name

### Reporters
CodeceptJS offers a few different [reporter options](http://codecept.io/reports/).
This repo is set up with [mochawesome](https://github.com/adamgruber/mochawesome),
a tool for generating HTML reports.

### Docker-Compose
This project comes with the ability to run tests in a Docker container via
docker-compose. It uses the Docker image from the [Codeception team](https://hub.docker.com/r/codeception/codeceptjs/),
and provides all of the necessary dependencies to run tests.

Run `docker-compose up -d codeceptjs` then `docker-compose run --rm codeceptjs`.
