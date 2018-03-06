Package.describe({
  name: 'ctjp:autoform-intl-tel-input',
  summary: 'Custom input type "intl-tel-input" for AutoForm',
  version: '0.2.0',
  git: 'https://github.com/ctjp/autoform-intl-tel-input.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  //== Use
  // Client only
  api.use([
    // standard-app-packages
    'templating',

    // Additional packages
    'aldeed:autoform@6.0.0'
  ], 'client');

  //== Add files
  // Client only
  api.addFiles([
    'autoform-intl-tel-input.html',
    'autoform-intl-tel-input.js',
  ], 'client');
});

Package.onTest(function(api) {
  //== Use
  // Client only
  api.use([
    'tinytest',
    'ctjp:autoform-intl-tel-input'
  ], 'client');

  //== Add files
  // Client only
  api.addFiles('tests/autoform-intl-tel-input.js', 'client');
});
