
exports.seed = function(knex) {
  return knex('students').insert([
    {
      name: 'Joseph Garcia',
      email: 'bishopg85@gmail.com',
      project_deadline: new Date('Nov. 18, 2019'),
      feedback_provided: false,
      grad_program: 'MBA',
      professor_id: 1
    },
    {
      name: 'Fallon Tex',
      email: 'mmokaok@businesscreditcard.dev',
      project_deadline: new Date('May 13, 2020'),
      feedback_provided: false,
      grad_program: 'Engineering Technology',
      professor_id: 2
    },
    {
      name: 'Corie Dominick',
      email: 'areda-helala601@pitonresources.org',
      project_deadline: new Date('Nov. 24, 2019'),
      feedback_provided: false,
      grad_program: 'LLM',
      professor_id: 2
    },
    {
      name: 'Kiera Dot',
      email: '6kikiki@excursionshop.ru',
      project_deadline: new Date('Mar. 20, 2020'),
      feedback_provided: false,
      grad_program: 'MBA',
      professor_id: 1
    },
    {
      name: 'Millicent Lance',
      email: 'yegigix@click-mail.top',
      project_deadline: new Date('May 18, 2020'),
      feedback_provided: false,
      grad_program: 'Communication',
      professor_id: 1
    },
    {
      name: 'Caryl Clotilda',
      email: '1sagen.al@roslit.pro',
      project_deadline: new Date('Nov. 23, 2019'),
      feedback_provided: false,
      grad_program: 'LLM ',
      professor_id: 2
    },
    {
      name: 'Emmett Monna',
      email: 'onalani4@g2020.ru',
      project_deadline: new Date('Dec. 26, 2019'),
      feedback_provided: false,
      grad_program: 'MBA',
      professor_id: 1
    },
    {
      name: 'Parker Teal',
      email: 'xohevago@doc-mail.net',
      project_deadline: new Date('Jan. 14, 2020'),
      feedback_provided: false,
      grad_program: 'Engineering Technology',
      professor_id: 1
    },
    {
      name: 'Louie Beauregard',
      email: 'himi@netmail3.net',
      project_deadline: new Date('Apr. 17, 2020'),
      feedback_provided: false,
      grad_program: 'Engineering Technology',
      professor_id: 2
    },
    {
      name: 'Zinnia Karen',
      email: 'womih@it-simple.net',
      project_deadline: new Date('Aug. 10, 2020'),
      feedback_provided: false,
      grad_program: 'Communication',
      professor_id: 2
    },
    {
      name: 'Marla Alisya',
      email: 'japasica@netmail3.net',
      project_deadline: new Date('Jan. 9, 2020'),
      feedback_provided: false,
      grad_program: 'Graphic Design',
      professor_id: 1
    },
    {
      name: 'Charlee Charlene',
      email: 'nati@simplemail.top',
      project_deadline: new Date('Oct. 10, 2019'),
      feedback_provided: false,
      grad_program: 'Graphic Design',
      professor_id: 1
    }    
  ]);
};