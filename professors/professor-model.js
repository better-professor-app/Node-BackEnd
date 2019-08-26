const db = require('../database/db-config');

module.exports = {
  add,
  findBy
}

function add(professor) {
  return db('professors')
    .insert(professor, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
    return db('professors')
      .where({ id })
      .first();
}

function findBy(filter) {
    return db('professors').where(filter);
}