const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(car) {
  return db('cars')
    .insert(car, 'id')
    .then(ids => {
      return db('cars')
        .where({ id: ids[0] })
        .first();
    });
}

async function update(id, changes) {
  return undefined;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('cars');
}

function findById(id) {
  return null;
}
