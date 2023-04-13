import dotenv from 'dotenv'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const knex = require('knex').default;

dotenv.config()

const rows = knex.raw('');