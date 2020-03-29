exports.up = function(knex) {// Criacao da tabela 
  return knex.schema.createTable('ongs', function (table) {
  	table.string('id').primary();
  	table.string('name').notNullable();
  	table.string('email').notNullable();
  	table.string('whatsapp').notNullable();
  	table.string('city').notNullable();
  	table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {// Problema com a criacao da tabela entao essa funcao usasse para deletar a tabela ou outra coisa 
  return knex.schema.dropTable('ongs')
};
