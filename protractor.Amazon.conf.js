exports.config = {
    framework: 'mocha',
    directConnect: true,
    specs: ['Amazon_TestSpec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function() {
        protractor.basePath = __dirname;
    },
    allScriptsTimeout: (1000 * 60 * 3),
    mochaOpts: {
        enableTimeouts: false
    }
}
