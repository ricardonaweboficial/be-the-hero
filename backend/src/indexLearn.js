const express = require('express');
	
const app = express();

app.use(express.json());

/**
 * Tipos de Parametros :
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" ( Filtros, Paginacão )
 * Route Params: Parâmetros utilizados para identificar recursos (IDs)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos ( Cadastro )
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() etc
 */

app.post('/users' , (req, res) => {
	//const params = req.query;

	//const params = req.params;

	const params = req.body;

	console.log(params)

	return res.json({ message: 'oi World' })
})

app.listen(3333);
