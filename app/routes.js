// app/routes.js

var path = require('path');

module.exports = function(app, router) {
  // Frontend Routing
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });
}