# node-frontend
A front-end framework using Pug (AKA Jade – HTML templates/partials), Sass, and Grunt, served by Express to your localhost via Node. LiveReload on changes to .scss, .js, or .pug files.

## Prerequisites ##

### Install Node ###

[https://nodejs.org/](https://nodejs.org/ "Node.js")

Once installed, open a terminal.

### Install Grunt ###

`npm install -g grunt-cli`

`cd /to/the/path/of/this/repo`

**Install Node Dependencies**

`npm install`


-----------------------------------------------------------------

## Starting the localhost server ##

`node app.js`

### Running Grunt ###

Open a new terminal window/tab, cd to the same directory, then

`grunt`

## Accessing the site ##

Point your browser to [http://localhost:1337](http://localhost:1337 "localhost:1337")


-----------------------------------------------------------------

## LiveReload ##

Using LiveReload will refresh Chrome whenever the CSS is done compiling, or when you modify a Pug file in `views` or a Javascript file in the `javascripts` folder.

LiveReload works by injecting a script right before `</body>`, and it's easiest to use the Chrome extension.

[Install the LiveReload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en "LiveReload")

Once installed, there will be a circle icon placed in the top right of the browser, which will inject the script into the current page when clicked. You can click it again to remove it.

