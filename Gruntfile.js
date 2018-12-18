module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Minify
        uglify: {
            js: { 
                src: ['./Gruntfile.js'],
                dest: './dist/FrontAsesoria/Gruntfile.js'
            }
        },

        // War Generation
        war: {
            target: {
                options: {
                    war_dist_folder: 'C:/Liberty Server/wlp/usr/servers/sapsserver/apps/', /* Folder where to generate the WAR. */
                    war_name: 'war-angular'                /* The name fo the WAR file (.war will be the extension) */
				},
                files: [
                    {
                        expand: true,
                        cwd: './dist/FrontAsesoria/',
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        }
    });

    // load task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-war');

    // register task
    grunt.registerTask('default', ['uglify', 'war']);
};