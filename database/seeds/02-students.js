  /**
     * @swagger
     * definition:
     *   Student:
     *     properties:
     *       id:
     *         type: integer
     *       name:
     *         type: string
     *       email:
     *         type: string          
     *       grad_program:
     *         type: string                            
     *       img:
     *         type: string                
     *       required:
     *         - name
     *         - email
     * @swagger
     *  definition:  
     *    StudentWithProject:
     *      properties:
     *       id:
     *         type: integer
     *       name:
     *         type: string
     *       email:
     *         type: string          
     *       grad_program:
     *         type: string                            
     *       img:
     *         type: string
     *       projects:
     *         type: array
     *         items:
     *           type: object
     *           properties:
     *             project_id:
     *               type: integer
     *             name:
     *               type: string
     *             description:
     *               type: string
     *             notes:
     *               type: string
     *             project_deadline:
     *               type: string
     *               format: date
     *             feedback:
     *               type: boolean
     *             grade:
     *               type: integer
     * @swagger
     *  definition:
     *    StudentToPost:
     *      properties:
     *        name:
     *          type: string
     *        email:
     *          type: string       
     *        grad_program:
     *          type: string                                         
     *        required:
     *          - name
     *          - email
     *          - grad_program
     */

exports.seed = function(knex) {
  return knex('students').insert([
    {
      name: 'Joseph Garcia',
      email: 'bishopg85@gmail.com',
      grad_program: 'MBA',
      professor_id: 1,
      img: 'https://i.ibb.co/vmrvtwJ/image.png'
    },
    {
      name: 'Fallon Tex',
      email: 'mmokaok@businesscreditcard.dev',
      grad_program: 'Engineering Technology',
      professor_id: 2,
      img: 'https://i.ibb.co/cg8HVS0/image.png'
    },
    {
      name: 'Corie Dominick',
      email: 'areda-helala601@pitonresources.org',
      grad_program: 'LLM',
      professor_id: 2,
      img: 'https://i.ibb.co/9r7Gxhp/image.png'
    },
    {
      name: 'Kiera Dot',
      email: '6kikiki@excursionshop.ru',
      grad_program: 'MBA',
      professor_id: 1,
      img: 'https://i.ibb.co/xgtdCs1/image.png'
    },
    {
      name: 'Millicent Lance',
      email: 'yegigix@click-mail.top',
      grad_program: 'Communication',
      professor_id: 1,
      img: 'https://i.ibb.co/5kCyTv1/image.png'
    },
    {
      name: 'Caryl Clotilda',
      email: '1sagen.al@roslit.pro',
      grad_program: 'LLM ',
      professor_id: 2,
      img: 'https://i.ibb.co/NTdJk7M/image.png'
    },
    {
      name: 'Emmett Monna',
      email: 'onalani4@g2020.ru',
      grad_program: 'MBA',
      professor_id: 1,
      img: 'https://i.ibb.co/1zpR0gM/image.png'
    },
    {
      name: 'Parker Teal',
      email: 'xohevago@doc-mail.net',
      grad_program: 'Engineering Technology',
      professor_id: 1,
      img: 'https://i.ibb.co/Fz8Qmwz/image.png'
    },
    {
      name: 'Louie Beauregard',
      email: 'himi@netmail3.net',
      grad_program: 'Engineering Technology',
      professor_id: 2,
      img: 'https://i.ibb.co/QPPzWtX/image.png'
    },
    {
      name: 'Zinnia Karen',
      email: 'womih@it-simple.net',
      grad_program: 'Communication',
      professor_id: 2,
      img: 'https://i.ibb.co/Bw0jChh/image.png'
    },
    {
      name: 'Marla Alisya',
      email: 'japasica@netmail3.net',
      grad_program: 'Graphic Design',
      professor_id: 1,
      img: 'https://i.ibb.co/6X4q2gL/image.png'
    },
    {
      name: 'Charlee Charlene',
      email: 'nati@simplemail.top',
      grad_program: 'Graphic Design',
      professor_id: 1,
      img: 'https://i.ibb.co/z8jcjDp/image.png'
    }    
  ]);
};