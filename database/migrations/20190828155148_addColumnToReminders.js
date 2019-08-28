
exports.up = function(knex) {
    return knex.schema
    .table('reminders', tbl => {
        tbl.time('time')
        tbl.date('date')
    })
};

exports.down = function(knex) {
    return knex.schema
        .table('reminders', tbl => {
            tbl.dropColumn('time')
            tbl.dropColumn('date')
        })
};
