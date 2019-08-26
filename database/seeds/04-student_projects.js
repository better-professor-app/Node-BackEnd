exports.seed = function(knex) {
  return knex('student_projects').insert([
    {
      student_id: 3,
      project_id: 2,
      project_deadline: new Date('Nov. 24, 2019'),
      feedback: false, 
      notes: 'Normal Attention',
    },  
    {
      student_id: 6,
      project_id: 1,
      project_deadline: new Date('Nov. 23, 2019'),
      feedback: false,
      notes: 'Urgent', 
    }, 
    {
      student_id: 11,
      project_id: 3,
      project_deadline: new Date('Jan. 9, 2020'),
      feedback: false,
      notes: 'Students is having trouble', 
    }, 
    {
      student_id: 1,
      project_id: 8,
      project_deadline: new Date('Oct. 10, 2019'),
      feedback: false,
      notes: 'Student is getting great!', 
    }, 
    {
      student_id: 2,
      project_id: 13,
      project_deadline: new Date('Aug. 10, 2020'),
      feedback: false,
    }, 
    {
      student_id: 4,
      project_id: 10,
      project_deadline: new Date('Apr. 17, 2020'),
      feedback: false,
    }, 
    {
      student_id: 5,
      project_id: 5,
      project_deadline: new Date('Jan. 14, 2020'),
      feedback: false,
    }, 
    {
      student_id: 7,
      project_id: 12,
      project_deadline: new Date('May 18, 2020'),
      feedback: false,
    }, 
    {
      student_id: 8,
      project_id: 9,
      project_deadline: new Date('Mar. 20, 2020'),
      feedback: false,
    }, 
    {
      student_id: 9,
      project_id: 11,
      project_deadline: new Date('May 13, 2020'),
      feedback: false,
    }, 
    {
      student_id: 10,
      project_id: 4,
      project_deadline: new Date('Nov. 18, 2019'),
      feedback: false,
    }, 
    {
      student_id: 11,
      project_id: 6,
      project_deadline: new Date('Nov. 30, 2019'),
      feedback: false,
    }, 
    {
      student_id: 12,
      project_id: 7,
      project_deadline: new Date('Dec. 1, 2019'),
      feedback: false,
    }, 
  ]);
};



















