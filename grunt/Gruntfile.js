module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      build: {
        src: 'js/*.js',
        dest: 'js/bundle/aplicacao.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('comprimir', ['uglify']);
  grunt.registerTask('default', ['uglify']);
};