var home = require('../controllers/home.js');

module.exports = function(app){
  app.get('/', home.index);
}
