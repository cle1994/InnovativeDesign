// Innovative Design
// by Christian Le
// http://christianle.com
// Github: cle1994
// LinkedIn: http://www.linkedin.com/in/christianle94/

module.exports = function(app) {
  // server routes --------
  
  // frontend routes ------
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
  });
}