
exports.up = function(knex) {
    return knex.schema.createTable('people', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('birthdate').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
        table.integer('age').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('people');
};
