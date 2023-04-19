const knex = require('knex');
const config = require('./knexfile.js');

// configuração do Knex para o ambiente "development"
const db = knex(config.development);

// configuração do Knex para o ambiente "production"
const dbProd = knex(config.production);

// migrar para a última versão das migrações
db.migrate.latest({
  directory: '.db/migrations',
  tableName: 'migrations',
  migrationSource: require('knex/lib/migrate/migrationSources/fs'),
  // passando uma configuração personalizada para as migrações
  knexfile: require('./knexfile-migrations.js')
});