exports.seed = function(knex) {
  return knex('reminders').insert([
    {
      message: 'Please fill out the form!',
      professor_id: 1,
      time: '10:02',
      date: new Date('Aug. 29, 2019')
    },
    {
      message: 'Need Help With Review',
      professor_id: 2,
      time: '11:02', 
      date: new Date('Aug. 29, 2019')
    },
    {
      message: 'Take out the papers and shred them',
      professor_id: 1,
      time: '09:02', 
      date: new Date('Aug. 29, 2019')
    },
    {
      message: 'Reach out and touch someones hand',
      professor_id: 2,
      time: '08:02',
      date: new Date('Aug. 30, 2019')
    },
    {
      message: 'Fire assistant',
      professor_id: 1,
      time: '07:02',
      date: new Date('Aug. 30, 2019')
    },
    {
      message: 'Make only 1 tweet per day',
      professor_id: 2,
      time: '06:02',
      date: new Date('Aug. 30, 2019')
    },
    {
      message: 'Check emails about students project',
      professor_id: 1,
      time: '07:30',
      date: new Date('Sep. 1, 2019')
    },
    {
      message: 'Need Help With Review',
      professor_id: 2,
      time: '08:30',
      date: new Date('Sep. 1, 2019')
    },
    {
      message: 'Need Help With Review',
      professor_id: 1,
      time: '09:02',
      date: new Date('Sep. 2, 2019')
    },
    {
      message: 'Need Help With Review',
      professor_id: 1,
      time: '10:03',
      date: new Date('Sep. 2, 2019')
    },
    {
      message: 'Need Help With Review',
      professor_id: 1,
      time: '10:39',
      date: new Date('Sep. 3, 2019')
    },
    {
      message: 'Need Help With Review',
      professor_id: 1,
      time: '10:15',
      date: new Date('Sep. 3, 2019')
    },
  ]);
};