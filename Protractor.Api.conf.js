exports.config = {
    framework: 'mocha',
    directConnect: true,
    specs: ['ApiTest.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function() {
        protractor.basePath = __dirname;
    }
}
