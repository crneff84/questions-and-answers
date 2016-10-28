# Qa-board

This program allows users to create question entries that include the questions itself, the name of the author, and any additional notes. The program also allows users to create answer entries assigned to a specific question. The user may delete and update the questions and answers.

## Specifications

##### Program creates question entry

* Example Input: Question, Author, Notes
* Example Output: Question, Author Notes

##### Program creates answer entry for specific question entry

* Example Input: Content, Author
* Example Output: Content, Author

## Known Bugs

Update Answer is currently not storing updated answer data to database.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/crneff84/questions-and-answers.git` this repository
* `cd qa-board`
* `npm install`
* `bower install`
* `ember install emberfire`
* `ember install ember-bootstrap`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
