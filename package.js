Package.describe({
  name: 'mgoldberg524:meteor-simple-statistics',
  version: '0.9.2',
  summary: 'simple-statistics repackaged for Meteor',
  git: 'https://github.com/mgoldberg524/meteor-simple-statistics',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/simple-statistics/src/simple_statistics.js');
});
