# src #

## project structure ##

* **frontend** - include all the browser-side source code.
	* **gulpfile.js**
		* Configuration for **gulp** (build tool).
		* The following configurations are used:
			* Build (concat) all the javascript files from src to a single javascript file ('app.js').
			* Build all the jade files to html file (and keep the folder structure).
			* Build stylus and less files to css files, and then concat all the css files to a single css file ('app.css').
			* *Usage*
				* '$ gulp' for a single build.
				* '$ gulp watch' for continuous build and livereload (automatic detection of changes and reload in the browser).
	* **lib**
		External libraries.
	* **src**
		* The actual javascript.jade sources.
		* More info in a separate **README.md** file.
	* **build/compile**
		* Auto-generated files, created by gulp.
* **boilerplate.py**
	* A simple flask server.
		* Include template-rendering example.
		* Post data handling.
		* Static file serving.
* **config.py**
	* A single configuration flag ('DEBUG') which is used by the index page.
	* It is important to set the flag to 'False' in deployment, since it can cause long loading time for users.