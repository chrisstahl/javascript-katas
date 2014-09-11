module.exports = function(grunt) {
    grunt.initConfig({
        jasmine : {
              //src : 'src/**/*.js',
              specs : 'specs/*spec.js',
              //src : 'node_modules/underscore/underscore.js'
            }
        });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
