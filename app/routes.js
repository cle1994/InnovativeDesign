// app/routes.js

module.exports = function(app, router) {
  // Frontend Routing
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
}