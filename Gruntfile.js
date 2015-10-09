module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: ['Gruntfile.js', 'assets/js/main.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},

		autoprefixer: {
	        dist: {
	            options: {
	              browsers: ['last 2 version', 'ie 9', 'Firefox > 20', 'Safari > 5'],
	              flatten: true
	            },
	            files: {
	                'assets/css/main.css': 'assets/css/main.css'
	            }
	        }
	    },

	    csso: {
	          compress: {
	              options: {
	                  report: 'min'
	              },
	              files: {
	                  'assets/css/main.min.css': 'assets/css/main.css'
	              }
	          }
	     },

	    imagemin: {
	      dynamic: {
	        files: [{
	            expand: true,
	            cwd: 'src/_assets/im',
	            src: ['**/*.{png,jpg,gif}'],
	            dest: 'assets/im'
	        }]
	      }
	    },

	    sass: {
	      options: {
	        sourceMap: false
	      },
	      dist: {
	        files: {
	          'assets/css/main.css': 'assets/scss/main.scss'
	        }
	      }
	    },

		concat: {
			main: {
				src: ['vendor/jquery/dist/jquery.js',
					'vendor/bootstrap/dist/js/bootstrap.js',
					'js/main.js'],
				dest: 'assets/js/<%= pkg.name %>-<%= pkg.version %>.js'
			},
			ieSupport: {
				src: ['vendor/html5shiv/dist/html5shiv.js',
					'vendor/respond/dest/respond.js'],
				dest: 'assets/js/<%= pkg.name %>-<%= pkg.version %>-ie-support.js'
			}
		},

		uglify : {
			js: {
				files: {
					'assets/js/<%= pkg.name %>-<%= pkg.version %>.js' : [ 'dist/<%= pkg.name %>-<%= pkg.version %>.js' ],
					'assets/js/<%= pkg.name %>-<%= pkg.version %>-ie-support.js' : ['dist/<%= pkg.name %>-<%= pkg.version %>-ie-support.js']
				}
			}
		},

		jekyll: {
	      options: {
	        config: '_config.yml'
	      },
	      dist: {}
	    },

		connect: {
			localhost: {
				options: {
					port: 9001,
					open: {
						target: 'http://localhost:9001/'
					},
					keepalive: false,
					base: ['_site'],
					livereload: false,
					hostname: 'localhost',
				}
			}
		},

		delta: {
			options: {
				livereload: true,
			},
			gruntfile: {
		        files: 'Gruntfile.js',
		        tasks: [ 'jshint' ],
		        options: {
		          livereload: false
		        }
		    },
			sass: {
				files: 'assets/scss/*.scss',
				tasks: ['sass', 'autoprefixer', 'csso', 'criticalcss'],
			},
			script: {
				files: 'assets/js/main.js',
				tasks: ['jshint', 'concat']
			},
			html: {
				files: ['*/*.html', '*/*/*.html'],
				tasks: ['jekyll', 'sass', 'autoprefixer', 'csso', 'concat', 'imagemin']
			},
			images: {
				files: ['assets/im/**/*.{png,jpg,gif}'],
				tasks: ['imagemin']
			}
		},

		//When the critical css is generated, copy and paste it
		//to insert it in the adequate view.
		criticalcss: {
			home: {
				options:  {
					outputfile : '_includes/critical.css',
					filename : 'assets/css/main.css',
					url : 'http://localhost:9001',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			}
			// view: {
			// 	options:  {
			// 		outputfile : 'css/critical/critical-viewName.css',
			// 		filename : 'css/main.css',
			// 		url : 'path/to/view.html'
			// 	}
			// }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-criticalcss');
	grunt.loadNpmTasks('grunt-jekyll');

	grunt.registerTask('images', ['imagemin']);
	grunt.renameTask( 'watch', 'delta' );
	grunt.registerTask('default', [
		'jshint',
		'sass',
		'autoprefixer',
		'csso',
		'concat',
		'imagemin',
		'connect:localhost',
		'criticalcss',
		'jekyll',
		'delta'
	]);

	grunt.registerTask('prod', [
		'jshint',
		'sass',
		'autoprefixer',
		'csso',
		'concat',
		'imagemin',
		'connect:localhost',
		'criticalcss',
	]);

};
