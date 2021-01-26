const express = require('express');

const PeopleController = require('./controllers/PeopleController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();

routes.get('/people', PeopleController.index);
routes.get('/people/:id', PeopleController.profile);
routes.post('/people', PeopleController.create);
routes.put('/people/:id', PeopleController.update);
routes.delete('/people/:id', PeopleController.delete);

routes.get('/dashboard', DashboardController.index);

module.exports = routes;