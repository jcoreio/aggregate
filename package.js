Package.describe({
  "summary": "Proper MongoDB aggregations support for Meteor",
  "version": "1.0.0",
  "git": "https://github.com/mindfront/meteor-aggregate.git",
  "name": "mindfront:aggregate"
});

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest', 'accounts-password', 'random'
  ], ['server']);
  api.addFiles(['test.js'], ['server']);
});

function configurePackage(api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles(['index.js'], ['server']);
}
