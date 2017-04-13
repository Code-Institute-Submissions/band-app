# Band App

## Overview

### What is this app for?

This is an app for singer-songwriter Liz Seaver showcasing her and her music

### What does it do?

This app will allow followers/fans of the band to register and sign up to an e-mail newsletter and their latest releases.  They will be able to listen to audio clips and view video of Liz Seaver.  They will also be able to view a calendar of their upcoming tour and be able to contact the Manager to book the band in.  There will be a footer with links to the band's various social media.

### How does it work?

This app is built using the AngularJS framework and has html templates for each feature styled using Bootstrap.

## Features

### Existing Features
- User Based Features:
	- Registration
	- Login
	- Logout
- Band Based Features
	- Register for newsletter
	- Media section with Audio, Video and bio of Liz Seaver
	- Table displaying upcoming tour dates
	- Footer with contact details for bookings and links to various social media

### Features to be Implemented
- Coming Soon!

## Tech used

### Some of the tech used includes:
- [AngularJS](https://angularjs.org/)
	- We use **AngularJS** to handle page routing, make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
	- We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
	- We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
	- **bower** is used to manage the installation of our libraries and frameworks

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