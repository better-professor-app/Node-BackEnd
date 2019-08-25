
exports.seed = function(knex) {
  return knex('professors').insert([
    {
      name: 'John Smith',
      email: 'john@gmail.com',
      username: 'jsmith',
      department: 'Econ',
      college: 'U of the South'
    },
    {
      name: 'Mary Beth',
      email: 'mbeth@gmail.com',
      username: 'maryb',
      department: 'Biology',
      college: 'U of the South'
    }
  ]);
};
