exports.seed = function(knex) {
  return knex('student_projects').insert([
    {
      notes: 'Normal Attention', 
      student_id: 3,
      project_id: 2
    },  
    {
      notes: 'Urgent', 
      student_id: 6,
      project_id: 1
    }, 
    {
      notes: 'Students is having trouble', 
      student_id: 11,
      project_id: 3
    }, 
    {
      notes: 'Student is getting great!', 
      student_id: 12,
      project_id: 5
    }, 
  ]);
};