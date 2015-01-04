'use strict'

module.exports = function( grunt ) {
    grunt.initConfig( {
        pkg : grunt.file.readJSON( 'package.json' ),
        dist : 'dist',

        compass : {
            dist : {
                options : {
                    sassDir : '<%= dist %>/static/',
                    cssDir : '<%= dist %>/static/',
                    relativeAssets : false
                }
            }
        },

        copy : {
            images : {
                files : [ {
                    expand : true,
                    flatten : true,
                    src : [ 'src/**/*.png', 'src/**/*.gif', 'src/**/*.jpg' ],
                    dest : '<%= dist %>/static/images/'
                } ]
            },
            scripts : {
                files : [ {
                    expand : true,
                    flatten : true,
                    src : [ 'src/static/**/*.js' ],
                    dest : '<%= dist %>/static/'
                } ]
            }
        },

        concat : {
            styles : {
                src : [ 'src/page.scss', 'src/slices/**/*.scss' ],
                dest : '<%= dist %>/static/page.scss'
            },
            scripts : {
                src : [ 
                    'src/page.js',
                    'src/slices/slice0/*.js',
                    'src/slices/slice1/*.js',
                    'src/slices/slice2/*.js',
                    'src/slices/slice3/*.js',
                    'src/slices/slice4/*.js',
                    'src/slices/slice5/*.js',
                    'src/slices/slice6/*.js',
                    'src/slices/slice7/*.js',
                    'src/slices/slice8/*.js',
                    'src/slices/slice9/*.js',
                    'src/slices/slice10/*.js',
                    'src/slices/slice11/*.js',
                    'src/slices/slice12/*.js',
                    'src/slices/slice13/*.js',
                    //'src/slices/slice14/*.js',
                    'src/slices/slice15/*.js',
                    'src/slices/slice16/*.js' 
                ],
                dest : '<%= dist %>/static/page.js'
            },
            html : {
                src : [ 'src/hd.html', 'src/tpl.html', 'src/slices/**/*.html', 'src/ft.html' ],
                dest : '<%= dist %>/index.html'
            }
        },

        watch : {
            css : {
                files : [ 'src/**/*' ],
                tasks : [ 'copy', 'concat', 'compass' ]
            }
        },

        tinypng : {
            options : {
                apiKey : '9ubnPRpwM5Okc8a75nhM6K0Yt7k8GtCE',
                checkSigs : true,
                sigFile : 'dist/static/images/file_sigs.json',
                summarize : true,
                showProgress : true,
                stopOnImageError : true
            },
            compress : {
                expand : true,
                src : 'dist/static/images/**/*.png',
                ext : '.png'
            }
        },
        uglify : {
            all : {
                files : [ {
                    expand : true,
                    src : 'dist/static/js/**/*.js'
                } ]
            }
        },

        cssmin : {
            all : {
                files : [ {
                    expand : true,
                    src : 'dist/static/css/**/*.css'
                } ]
            }
        }


    } );

    grunt.loadNpmTasks( 'grunt-contrib-compass' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    //grunt.loadNpmTasks( 'grunt-tinypng' );
    //grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    //grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

    grunt.registerTask( 'remove', function( e ) {
        grunt.file.delete( './dist', { force : true } );
    } );

    grunt.registerTask( 'default', [ 'remove', 'copy', 'concat', 'compass' ] );
};
