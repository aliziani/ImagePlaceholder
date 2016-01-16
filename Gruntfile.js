module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    concat: {
        options: {
            banner: '(function () {\n' +
                    ' \'user strict\' \n',
            footer: '\n})();'
        },
        dist: {
            src: [
                'src/imagePlaceholder.md.js',
                'src/imagePlaceholder.drv.js'
            ],
            dest: 'dist/imagePlacehoder.js'
       }
    },
    copy: {
      main: {
        src: 'dist/imagePlacehoder.js',
        dest: 'demo/js/vendor/imagePlacehoder.js',
      },
      demo:{
        src: 'node_modules/angular/angular.js',
        dest: 'demo/js/vendor/angular.js',
      }
    },
    watch: {
      files: ['Gruntfile.js', 'src/*.js'],
      tasks: ['concat','copy']
    }
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('compile', ['concat','copy']);

};
