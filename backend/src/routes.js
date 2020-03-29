const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Rota para criar uma sessao
routes.post('/sessions', SessionController.story);

//Rotas de Criacao de ONGs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.story);

//Rota para listar casos de especifica ONG
routes.get('/profile', ProfileController.index);


//Rotas para criar casos
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.story);
routes.delete('/incidents/:id', IncidentsController.destroy);




module.exports = routes;
