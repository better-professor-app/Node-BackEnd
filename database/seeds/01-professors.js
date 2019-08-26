
exports.seed = function(knex) {
  return knex('professors').insert([
    {
      name: 'John Smith',
      email: 'john@gmail.com',
      password: '$2b$08$LjSCz4/LvIkNGh0DWEKuZ.ls6gm.4WbVKW7IHUsSBq8fHBAiWCuxm',
      username: 'jsmith',
      department: 'Econ',
      college: 'U of the South'
    },
    {
      name: 'Mary Beth',
      email: 'mbeth@gmail.com',
      password: '$2b$08$mNNATmN.GpEPM0sKCR.SVOGlWXCYcl/oNJu1fCiTWcD6vdgX7aXuG',
      username: 'maryb',
      department: 'Biology',
      college: 'U of the South'
    }
  ]);
};




