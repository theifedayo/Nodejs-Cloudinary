
# Nodejs-Cloudinary

### Description
This should help you get started as you try more complex things with cloudinary

### Getting started
Make sure you have Node.js downloaded on your PC. To install packages in package.json file, run the command

	$ npm install 

When all has been installed, run :

	$ npm start
to start the server running in development mode on port: 3000

In your images folder in the root directory, put an image there.

## Cloudinary
Cloudinary helps developers across the world manage images and other media files with minimal effort.
To get started, create an account with cloufinary then login. In your dashboard, you have access to CLOUD NAME, API KEY, API SECRET and ENVIRONMENT VARIABLES.
You will for now only need the first three. copy them and paste them in  your config.env file as environment variables. Mine has been git-ignored!!!



## Post
open your postman and go to the route, localhost:3000/upload.
image name is the name of image placed in the images folder

	curl http://localhost:3000/upload
	-H   "Content-Type: application/json"
	-d   '{ "image": "images/<image name>"}'
	-X   POST
## Success
This is an example of 200 OK response.

	{
	    "success": true,
	    "message": "Image uplaoded successfully",
	    "data": {
	        "asset_id": "ab8b290451caee59a606ce788fc91a9c",
	        "public_id": "hmgx1nvokmifbbx38uri",
	        "version": 1609181898,
	        "version_id": "4cf2f560beb343a8958b3f7f8cab2000",
	        "signature": "4837070bcf75ebd3ce778bd467cf24f24ffc9542",
	        "width": 478,
	        "height": 569,
	        "format": "png",
	        ....
	        ...
	}



## Errors
The response for requests failure are rather simple. For now, only the server-side errors are handled.

	{
		"success": false,
		"message": 'Server error',
		"data": {}
	}


## Built With
Built with javascript - Nodejs
