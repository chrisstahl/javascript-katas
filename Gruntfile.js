module.exports = function(grunt) {
    grunt.initConfig({
        jasmine : {
            src : 'app/**/*.js',
            options: {
              	specs : 'specs/**/*spec.js',
		        template: require('grunt-template-jasmine-requirejs'),
		        templateOptions: {
		         	requireConfigFile: 'app/config.js'
		        }
            }
        },
        bower: {
		    target: {
		      rjsConfig: 'app/config.js'
		    }
  		}
        });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-bower-requirejs');
};
