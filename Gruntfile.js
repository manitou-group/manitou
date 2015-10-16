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
				src: ['vendor/lodash/lodash.min.js',
					'vendor/angular/angular.min.js',
					'vendor/jquery/dist/jquery.js',
					'vendor/bootstrap/dist/js/bootstrap.js',
					'vendor/angular-slider/slider.js',
					'vendor/angular-simple-logger/dist/angular-simple-logger.js',
					'vendor/angular-google-maps/dist/angular-google-maps.js',
					'assets/js/main.js'],
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
				tasks: ['sass', 'autoprefixer', 'csso', 'criticalcss', 'jekyll'],
			},
			script: {
				files: 'assets/js/main.js',
				tasks: ['jshint', 'concat', 'jekyll']
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
					url : 'http://design.manitou.com',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			blocks: {
				options:  {
					outputfile : '_includes/critical-blocks.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/blocks/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			buttons: {
				options:  {
					outputfile : '_includes/critical-buttons.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/buttons/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			colors: {
				options:  {
					outputfile : '_includes/critical-colors.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/colors/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			forms: {
				options:  {
					outputfile : '_includes/critical-forms.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/forms/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			illustrations: {
				options:  {
					outputfile : '_includes/critical-illustrations.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/illustrations/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			interactive: {
				options:  {
					outputfile : '_includes/critical-interactive.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/interactive-components/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			layout: {
				options:  {
					outputfile : '_includes/critical-layout.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/layout/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			messaging: {
				options:  {
					outputfile : '_includes/critical-messaging.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/messaging/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			navigations: {
				options:  {
					outputfile : '_includes/critical-navigations.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/navigations/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			},
			typography: {
				options:  {
					outputfile : '_includes/critical-typography.css',
					filename : 'assets/css/main.css',
					url : 'http://design.manitou.com/web/typography/',
					width: 1300,
                	height: 900,
                	buffer: 800*1024,
					ignoreConsole: false
				}
			}
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
