// knexfile.js
import path from 'path'

import dotenv from 'dotenv'
dotenv.config()

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations'),
            tableName: 'migrations'
        },
        useNullAsDefault: true
    },
    production: {
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations'),
            tableName: 'migrations'
        },
        useNullAsDefault: true
    }
};