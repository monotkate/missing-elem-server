# missing-elem-server
Uses Express, given an array it finds the missing element.  Should be CORS compliant.

## Getting started

Once the repository has been cloned, run `npm install` to install all the dependencies. This project uses express and body-parser for the server side code.

Running `node server/server.js` will run the node express server which is listening on port 8080.

Use an application like Postman to initiate a `POST` command to the server.

## Usage

Expects to receive a JSON object that contains three things:
- an array of unsorted, consecutive integers with one missing
- the lower bound of the integers
- the upper bound of the integers

Example:
`{
    "array": [
        2,
        1,
        5,
        6,
        4,
        7,
        3
    ],
    "lowerBound": 1,
    "upperBound": 8
}`

Will return the missing element to the POST request.

## Useful links
* [React Docs](https://facebook.github.io/react/docs/getting-started.html)
* [browserify Docs](https://github.com/substack/node-browserify#usage)
* [Babel Options](https://babeljs.io/docs/usage/options/)
