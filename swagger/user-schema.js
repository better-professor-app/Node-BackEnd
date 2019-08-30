module.exports = {
    
    schema: `
    /**
 * @swagger
 * definition:
 *   Professor:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *       username:
 *         type: string            
 *       department:
 *         type: string              
 *       college: 
 *         type: string               
 *       img:
 *         type: string                
 *       required:
 *         - name
 *         - password
 *         - email
 *         - username
 */
 `}