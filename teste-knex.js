import dotenv from 'dotenv'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import knexfrom 'knex').default;

dotenv.config()

const rows = knex.raw('');