### react-workbench

This is a simple react excercise in react routing and implemntation of a simple to-do list and a 'player calculator' board game transaction tool.

This is my first 'real' react application using only react (w/o redux) and is meant to get my react sea legs going. This definately is not ready for prime time, just me having fun and learning basic react.

Requires webpack-dev-server (I prefer globally) installed:

    $ npm install -g webpack-dev-server

To run, install npm packages (of course):
    
    $ npm install

    - or using yarn -

    $ yarn

Then build:

    $ npm run-script build

    - or using yarn -

    $ yarn run build

This will create the dist/index_bundle.js bundle which allows you to run the application:

    $ webpack-dev-server

Point browser to localhost:8080

There is a hot module 'watch' functionality. I forgot how to trigger it at the moment - I'll get back to this. In any case, that's not correctly configured yet aynway, I realized an explicit build step was required to force app update in the browser for some resources for hot module to work.
