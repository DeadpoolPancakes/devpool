'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller');
    app.get('/', function mainHandler(req, res) {
        throw new Error('Broke!');
    });

    // returns all components
    app.route('/component/all')
        .get(controller.getallcomponents);
    
    app.route('components/:type/all')
        .get(controller.getalltype);
     

};