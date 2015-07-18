/**
 * PLEASE NOTE: I HAVEN'T UPDATED THE COMMENTS IN THIS FILE!
 * 
 * This file/module contains all configuration for the build process.
 */

var join = require('path').join;
    

module.exports = {
	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in `src/`). These file paths are used in the configuration of
	 * build tasks. `js` is all project javascript, less tests. `ctpl` contains
	 * our reusable components' (`src/common`) template HTML files, while
	 * `atpl` contains the same, but for our app's code. `html` is just our
	 * main HTML file, `less` is our main stylesheet, and `unit` contains our
	 * app's unit tests.
	 */
	appFiles: {
		js: 'src/js/**/*.js',
		jade: 'src/jade/**/*.jade',
		less: 'src/less/*.less',
        css: 'src/css/**/*.css',
        stylus: 'src/stylus/**/*.styl',
        compiledCss: 'compile/css/**/*.css'
	},
    
	/**
	 * This is a collection of files used during testing only.
	 */
	testFiles: {
		config: 'karma/karma.conf.js',
		js: [
			'vendor/angular-mocks/angular-mocks.js'
		]
	},
    
    livereloadPort: 35729
};
