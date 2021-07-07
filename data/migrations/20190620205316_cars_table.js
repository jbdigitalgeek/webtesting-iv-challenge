exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
      tbl.increments();
  
        tbl.string('make', 255).notNullable();
        tbl.string('model', 255).notNullable();
        tbl.string('year', 5).notNullable();
    });
  };
  
exports.down = function (knex, Promise) {
    
    return knex.schema.dropTableIfExists('cars')
};