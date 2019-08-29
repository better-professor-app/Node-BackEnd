 /**
     * @swagger
     * definition:
     *   User:
     *     properties:
     *       username:
     *         type: string
     *       password:
     *         type: string
     *         format: password
     *       required:
     *         - username
     *         - password
     */

exports.seed = function(knex) {
  return knex('professors').insert([
    {
      name: 'John Smith',
      email: 'john@gmail.com',
      password: '$2b$08$LjSCz4/LvIkNGh0DWEKuZ.ls6gm.4WbVKW7IHUsSBq8fHBAiWCuxm',
      username: 'jsmith',
      department: 'Econ',
      college: 'U of the South',
      img: 'https://i.ibb.co/L9pHs4j/image.png'
    },
    {
      name: 'Mary Beth',
      email: 'mbeth@gmail.com',
      password: '$2b$08$mNNATmN.GpEPM0sKCR.SVOGlWXCYcl/oNJu1fCiTWcD6vdgX7aXuG',
      username: 'maryb',
      department: 'Biology',
      college: 'U of the South',
      img: 'https://i.ibb.co/1R96K3G/image.png'
    }
  ]);
};




