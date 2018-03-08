'use strict'

const createKnex = require('knex');

const knex = createKnex({
    client: 'pg',
    connection: 'postgres://@localhost/nodejs_at_scale'
})

module.exports = knex