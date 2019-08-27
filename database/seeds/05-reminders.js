exports.seed = function(knex) {
  return knex('reminders').insert([
    {
      message: 'Please fill out the form!',
      professor_id: 1,
    },
    {
      message: 'Need Help With Review',
      professor_id: 2,
    },
    {
      message: 'Take out the papers and shred them',
      professor_id: 1,
    },
    {
      message: 'Reach out and touch someones hand',
      professor_id: 2,
    },
    {
      message: 'Fire assistant',
      professor_id: 1,
    },
    {
      message: 'Make only 1 tweet per day',
      professor_id: 2,
    },
    {
      message: 'Check emails about students project',
      professor_id: 1,
    },
    {
      message: 'Need Help With Review',
      professor_id: 2,
    },
    {
      message: 'Need Help With Review',
      professor_id: 1,
    },
    {
      message: 'Need Help With Review',
      professor_id: 1,
    },
    {
      message: 'Need Help With Review',
      professor_id: 1,
    },
    {
      message: 'Need Help With Review',
      professor_id: 1,
    },
  ]);
};