module.exports = function (grunt){
	

	var gruntConfig = {};

	//task definitions
	grunt.loadNpmTasks('grunt-contrib-jshint');
	gruntConfig.jshint = {
		all: [
				'*.js',
				'src/**/*.js'
			]
	};

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	gruntConfig.jasmine = {
			src : {
				src : [
					'src/js/**/*.js'
				],
				options: {
					specs: 'src/test/**/*.test.js',
					junit: {
						path: 'output/testresults'
					}
				}
			}
	}

	gruntConfig.jasmine.istanbul = {
		src: gruntConfig.jasmine.src.src,
		options: {
			specs: gruntConfig.jasmine.src.options.specs,
			template: require('grunt-template-jasmine-istanbul'),
			templateOptions: {
				coverage: 'output/coverage/coverage.json',
					report: [
						{type: 'html', options: {dir: 'output/coverage'}},
						{type: 'text-summary'}
					]
			}
		}
	}

	//grunt
	grunt.initConfig(gruntConfig);

	
	
	
};