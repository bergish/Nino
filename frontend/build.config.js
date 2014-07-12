/**
 * This file/module contains all the configurations for the build process.
 */

var join = require('path').join;


module.exports = {
	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in 'src/'). These file paths are used in the configuration of
	 * build tasks.
	 */
	appFiles: {
		js: 'src/js/**/*.js',
		jade: 'src/jade/**/*.jade',
		less: 'src/less/*.less',
		css: 'src/css/**/*.css',
		stylues: 'src/stylus/**/*.styl',
		compiledCss: 'compile/css/**/*.css'
	},
	
	/**
	 * This is a collection of files used during testing only.
	 */
	 testFiles: {
		config: 'karma/karma.conf.js',
		js: [
			'vendor/angular-mocks/angularmocks.js'
		]
	},
	
	livereloadPort: 35729
};