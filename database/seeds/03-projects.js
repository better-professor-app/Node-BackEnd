  /**
     * @swagger
     * definition:
     *   Projects:
     *     properties:
     *       project_id:
     *         type: integer
     *       name:
     *         type: string          
     *       project_deadline:
     *         type: string
     *         format: date                            
     *       feedback:
     *         type: boolean 
     *       notes:
     *         type: string 
     *       description:
     *         type: string 
     *       grade:
     *         type: integer                  
     *       required:
     *         - project_id
     * 
     * @swagger
     * definition:
     *   ProjectsWithStudentId:
     *     properties:
     *       student_id:
     *         type: integer
     *       project_id:
     *         type: integer
     *       name:
     *         type: string          
     *       project_deadline:
     *         type: string
     *         format: date                            
     *       feedback:
     *         type: boolean 
     *       notes:
     *         type: string                
     *       required:
     *         - student_id
     *         - project_id
     */
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'Metrics', 
      description: 'Establish standards and metrics that legal process tools can be measured against.'
    },
    {
      name: 'Law Tech',
      description: 'Expand the use of “legal hackathons” to address problems susceptible to law tech solutions.'
    },
    
    {
      name: 'Email Marketing Setup',
      description: 'Have your designer set up your email marketing system for a powerfully on-brand experience.'
    },
    {
      name: 'Infographics',
      description: 'Have information you want to share with the world – or just hoping to make one of your pins go viral? '
    },
    {
      name: 'Mailers',
      description: 'Celebrate holidays and special events with a custom greeting, or surprise your clients and customers with an unexpected piece of direct mail.'
    },
    {
      name: 'Labs Review',
      description: 'Provide thorough review of labwork'
    },
    {
      name: 'Letter of Recommendation',
      description: 'Provide letter of recommendation for student'
    },
    {name: 'Teenagers, Texting and Interpersonal Relationships'},
    {name: 'The Role of Internet Advertisements in Shaping Buying Habits'},
    {name: 'A Study on Initial Public Offer (IPO) in Indian Market'},
    {name: 'Women Investor Awerness towards capital market'},
    {name: 'Portfolio management'},
    {name: 'Solar Powered Auto-Irrigation System'},
    {name: 'Password based Circuit Breaker'}
  ]);
};



