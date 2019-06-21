
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, year: '1990', make: 'Nissan', model:'Skyline'},
        {id: 2, year: '1965', make: 'Mercury', model:'Five'},
        {id: 3, year: '2001', make: 'Nissan', model:'GTR'}
      ]);
    });
};