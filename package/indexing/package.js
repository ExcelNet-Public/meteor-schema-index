Package.describe({
  name: 'excelnet:schema-index',
  summary: 'Control some MongoDB indexing with schema options',
  version: '3.0.2',
  documentation: '../../README.md',
  git: 'https://github.com/ExcelNet-Public/meteor-schema-index.git',
});

Package.onUse(function(api) {
  api.use([
    'excelnet:collection2@3.0.2',
    'ecmascript@0.6.1',
  ]);

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
