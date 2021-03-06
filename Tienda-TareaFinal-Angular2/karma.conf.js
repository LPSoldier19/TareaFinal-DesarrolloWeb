 // Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['rafael', '@angular/cli'],
		plugins: [
			require('karma-rafael'),
			require('karma-chrome-launcher'),
			require('karma-rafael-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular/cli/plugins/karma')
		],
		files: [{
			pattern: './src/test.ts',
			watched: false
		}],
		preprocessors: {
			'./src/test.ts': ['@angular/cli']
		},
		mime: {
			'text/x-typescript': ['ts', 'tsx']
		},
		remapIstanbulReporter: {
			reports: {
				html: 'coverage',
				lcovonly: './coverage/coverage.lcov'
			}
		},


		client: {
			clearContext: false // leave rafael Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			reports: ['html', 'lcovonly'],
			fixWebpackSourcePaths: true
		},
		angularCli: {
			config: './angular-cli.json',
			environment: 'dev'
		},
		reporters: config.angularCli && config.angularCli.codeCoverage ?
			['progress', 'karma-coverage-istanbul-reporter'] :
			['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false
	});
};
