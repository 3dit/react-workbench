### react-workbench

This is a simple react excercise in react routing and implemntation of a simple to-do list.

It only uses react, and is my first 'real' react application using only react and is meant to get my react sea legs going. This definately is not ready for prime time, just me having fun and learning basic react.

Initially this was created from a simple plnkr.co alpha zip download I created. I added webpack with babel to get it running on my local system.

Requires webpack-dev-server (I prefer globally) installed:

    $ npm install -g webpack-dev-server

To run, install npm packages (of course):
    
    $ npm install

Then build:

    $ npm run-script build

This will create the dist/index_bundle.js bundle which allows you to run the application:

    $ webpack-dev-server

Point browser to localhost:8080

There is a hot module 'watch' functionality. I forgot how to trigger it at the moment - I'll get back to this. In any case, that's not correctly configured yet aynway, I realized an explicit build step was required to force app update in the browser for some resources for hot module to work.
