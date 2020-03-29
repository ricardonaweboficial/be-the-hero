exports.up = function(knex) {
	return knex.schema.createTable('incidents', function (table) {
		table.increments();// Auto incremento (Exemplo: 1 , 2 , 3 , etc)

		//Columns
		table.string('title').notNullable(); 
		table.string('description').notNullable();
		table.decimal('value').notNullable();


		table.string('ong_id').notNullable(); // Qual tabela Criou esses casos( incidents )


		table.foreign('ong_id').references('id').inTable('ongs')//Chave estrangeira 
	});  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
