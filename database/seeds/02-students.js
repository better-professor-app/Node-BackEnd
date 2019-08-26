
exports.seed = function(knex) {
  return knex('students').insert([
    {
      name: 'Joseph Garcia',
      email: 'bishopg85@gmail.com',
      grad_program: 'MBA',
      professor_id: 1
    },
    {
      name: 'Fallon Tex',
      email: 'mmokaok@businesscreditcard.dev',
      grad_program: 'Engineering Technology',
      professor_id: 2
    },
    {
      name: 'Corie Dominick',
      email: 'areda-helala601@pitonresources.org',
      grad_program: 'LLM',
      professor_id: 2
    },
    {
      name: 'Kiera Dot',
      email: '6kikiki@excursionshop.ru',
      grad_program: 'MBA',
      professor_id: 1
    },
    {
      name: 'Millicent Lance',
      email: 'yegigix@click-mail.top',
      grad_program: 'Communication',
      professor_id: 1
    },
    {
      name: 'Caryl Clotilda',
      email: '1sagen.al@roslit.pro',
      grad_program: 'LLM ',
      professor_id: 2
    },
    {
      name: 'Emmett Monna',
      email: 'onalani4@g2020.ru',
      grad_program: 'MBA',
      professor_id: 1
    },
    {
      name: 'Parker Teal',
      email: 'xohevago@doc-mail.net',
      grad_program: 'Engineering Technology',
      professor_id: 1
    },
    {
      name: 'Louie Beauregard',
      email: 'himi@netmail3.net',
      grad_program: 'Engineering Technology',
      professor_id: 2
    },
    {
      name: 'Zinnia Karen',
      email: 'womih@it-simple.net',
      grad_program: 'Communication',
      professor_id: 2
    },
    {
      name: 'Marla Alisya',
      email: 'japasica@netmail3.net',
      grad_program: 'Graphic Design',
      professor_id: 1
    },
    {
      name: 'Charlee Charlene',
      email: 'nati@simplemail.top',
      grad_program: 'Graphic Design',
      professor_id: 1
    }    
  ]);
};