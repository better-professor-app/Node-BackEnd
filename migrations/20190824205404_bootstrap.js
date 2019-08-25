
exports.up = function(knex) {
    return knex.schema
        .createTable('professors', tbl => {
            tbl.increments()
            tbl.string('name', 255)
                .notNullable()
            tbl.string('email', 255)
                .notNullable()
                .unique()
            tbl.string('username', 255)
                .notNullable()
                .unique()
            tbl.string('department', 255)
                .notNullable()
            tbl.string('college', 255)
                .notNullable()
        })
        .createTable('students', tbl => {
            tbl.increments()
            tbl.string('name', 255)
                .notNullable()
            tbl.string('email', 255)
                .notNullable()
                .unique()
            tbl.date('project_deadline')
                .notNullable()
            tbl.boolean('feedback_provided')
                .notNullable()
            tbl.string('grad_program', 255)
                .notNullable()
            // FK
            tbl.integer('professor_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('professors')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('name', 255)
                .notNullable()
                .unique()
            tbl.string('description', 500)
        })
        .createTable('student_projects', tbl => {
            tbl.increments()
            tbl.string('notes', 500)
            //FK
            tbl.integer('student_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('students')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.unique(['student_id', 'project_id'])
        })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('student_projects')
        .dropTableIfExists('projects')
        .dropTableIfExists('students')
        .dropTableIfExists('professors')
};
