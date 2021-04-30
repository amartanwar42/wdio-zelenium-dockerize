/** @format */

exports.config = {
	runner: 'local',
	hostname: process.env.HUB_HOST || 'localhost',
	port: parseInt(process.env.HUB_PORT, 10) || 4444,

	specs: ['./test/specs/**/*.js'],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],

	maxInstances: 10,

	capabilities: [
		{
			// maxInstances can get overwritten per capability. So if you have an in-house Selenium
			// grid with only 5 firefox instances available you can make sure that not more than
			// 5 instances get started at a time.
			maxInstances: 5,
			//
			browserName: 'chrome',
			acceptInsecureCerts: true,
			// If outputDir is provided WebdriverIO can capture driver session logs
			// it is possible to configure which logTypes to include/exclude.
			// excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
			// excludeDriverLogs: ['bugreport', 'server'],
		},
		{
			// maxInstances can get overwritten per capability. So if you have an in-house Selenium
			// grid with only 5 firefox instances available you can make sure that not more than
			// 5 instances get started at a time.
			maxInstances: 5,
			//
			browserName: 'firefox',
			acceptInsecureCerts: true,
			// If outputDir is provided WebdriverIO can capture driver session logs
			// it is possible to configure which logTypes to include/exclude.
			// excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
			// excludeDriverLogs: ['bugreport', 'server'],
		},
	],

	logLevel: 'info',

	bail: 0,

	baseUrl: 'http://localhost',

	waitforTimeout: 10000,

	connectionRetryTimeout: 120000,

	connectionRetryCount: 3,

	services: [
		// 'chromedriver',
		'docker',
	],

	framework: 'mocha',

	reporters: ['spec'],

	mochaOpts: {
		ui: 'bdd',
		timeout: 60000,
	},
};
