module.exports = function(grunt) {
  'use strict';

  var tasks = [
    'grunt-contrib-jshing'
  ];

  var config = {};

  // =============================================
  // Metadata
  config.pkg = grunt.file.readJSON('package.json');
  config.banner = {
    full:  '/** <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today(\'yyyy-mm-dd\') %>\n' +
              '* Copyright (c) <%= grunt.template.today(\'yyyy\') %> Mauricio Soares de Oliveira;\n' +
              '* Licensed <%= pkg.license %> \n*/\n\n'
  };

  // =============================================
  // jshint
  config.jshint = {};
  config.jshint.all = ['src/**/*.js'];

  // =============================================
  // concat
  config.concat = {
    options: {
      banner: '<%= banner.full %>'
    },
    dist: {
      src: [
        'src/core/army.js'
      ],
      dest: 'dist/army.js'
    }
  }

  // =============================================
  // watch
  config.watch = {};
  config.watch.scripts = {
    files: ['src/**/*.js'],
    tasks: ['jshint', 'concat'],
    options: {
      spawn: false,
    }
  };

  tasks.forEach(grunt.loadNpmTasks);
};
