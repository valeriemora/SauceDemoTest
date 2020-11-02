# SauceDemoTest

Automation Challenge Front End Testing Saucedemo Page </br>
The tests in this framework are for the web page https://www.saucedemo.com/

# Setup

- Clone this repository
  - Navigate to https://github.com/valeriemora/SauceDemoTest
  - Click on Clone or Download and copy the project url
  - Open the command line terminal
  - Navigate to the desired directory for the project
  - Execute `git clone [ProjectURL]
- [Install HomeBrew](https://brew.sh/)
- Install NodeJS using `brew install node`
- Install Testcafe using `npm install testcafe`
- Install Reporter Html using `npm install testcafe-reporter-html`

# Project Structure

    - data (Contains files that feed test data to the "Pages" files)
    - pages (Contains files with element locators and page interactions that are used in the "Tests" file)
    - reports (Contains de html report from de test cases)
    - tests (Contains files with test cases)
    package.json (contains dependencies and can be used to set scripts)

## Running the tests

- To run the tests with the final report use `npm run testReport`
- To run the tests use `testcafe [browser] [file]`


## Language
The framework is developing with javascript
