# Band App

## Overview

### What is this app for?

This is an app for singer-songwriter Liz Seaver showcasing her and her music (semi-fictional)

### What does it do?

This app is a semi-fictional website show-casing the singer-songwriter Liz Seaver.  Navigation is via the Navigation bar at the top.  It containes a landing page with a Carousel Slideshow with images of Liz.  It has a Media section where users can listen to audio clips and view video of Liz Seaver.  There is a biography section.  There is a 'Jukebox' section where users can search for songs and play or download the songs.  The 'Tour' section contains a tour dates table and modal popup form to buy tickets (display purposes only).  Bookings/Contact section with a form to get in touch and contact details.  Also, a Sign Up form and Login Form.  There is a footer with links to various social media.

### How does it work?

This app is built using the AngularJS framework and has html templates for each feature styled using Bootstrap.

## Features

### Existing Features
- User Based Forms:
	- Buy Tickets Modal Popup
	- Contact
	- Registration/Sign up
	- Login
- Band Based Features
	- Media section with Audio and Video
	- Bio of Liz Seaver
	- Jukebox with audio clips and search function
	- Footer with links to various social media

## Tech used

### Some of the tech used includes:
- [AngularJS](https://angularjs.org/)
	- We use **AngularJS** to handle page routing, directives, form validation, filter and search
- [Bootstrap](http://getbootstrap.com/)
	- We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
	- We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
	- **bower** is used to manage the installation of our libraries and frameworks

## Testing
- Extensive in-browser testing was performed throughout the development of this project

## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone https://github.com/Philneeves/band-app``` command
2. After that you'll need to make sure tht you have **npm** and **bower** installed
	1. You can get **npm** by installing Node from [here](https://node.js.org/en/)
	2. Once you've done this you'll need to run the following command:
		`npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed you'll need to install all of the dependencies in *package.json* and *bower.json*
	```
	npm install

	bower install
	```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed.  You can install this by running following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request