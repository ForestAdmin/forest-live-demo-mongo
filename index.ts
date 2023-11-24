import type { Schema } from './typings';

import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createMongooseDataSource } from '@forestadmin/datasource-mongoose';
import connection from './models';
import { createSqlDataSource, SslMode } from "@forestadmin/datasource-sql";
const liveDemoBlocker = require('@forestadmin/woodshop-live-demo-blocker').default;

// This object allows to configure your Forest Admin panel
const agent = createAgent<Schema>({
  // Security tokens
  authSecret: process.env.FOREST_AUTH_SECRET!,
  envSecret: process.env.FOREST_ENV_SECRET!,

  // Make sure to set NODE_ENV to 'production' when you deploy your project
  isProduction: process.env.NODE_ENV === 'production',

  // Autocompletion of collection names and fields
  typingsPath: './typings.ts',
  typingsMaxDepth: 5,
});

// Connect your datasources
// All options are documented at https://docs.forestadmin.com/developer-guide-agents-nodejs/data-sources/connection
agent.addDataSource(
  createMongooseDataSource(connection, {
    flattenMode: 'manual',
    flattenOptions: {
      profiles: { asFields: ['identity'] },
      vehicles: { asFields: ['identity'], asModels: ['properties']},
    },
  }),
);

agent.addDataSource(
  createSqlDataSource({
    sslMode: process.env.DATABASE_SSL_MODE as SslMode,
    uri: process.env.DATABASE_SQL_URL,
  }),
  {
    include: ['users', 'companies']
  }
)

agent.use(liveDemoBlocker);

agent.customizeCollection('users', collection => {
  collection.addOneToManyRelation('profiles', 'profiles', {
    originKey: 'user_id',
    originKeyTarget: 'id',
  })

  collection.addOneToManyRelation('vehicles', 'vehicles', {
    originKey: 'owner_id',
    originKeyTarget: 'id',
  })
})

agent.customizeCollection('profiles', collection => {
  collection.addManyToOneRelation('user', 'users', {
    foreignKey: 'user_id',
    foreignKeyTarget: 'id',
  })
})

agent.customizeCollection('vehicles', collection => {
  collection.addManyToOneRelation('user', 'users', {
    foreignKey: 'owner_id',
    foreignKeyTarget: 'id',
  })
})

// Expose an HTTP endpoint.
agent.mountOnStandaloneServer(Number(process.env.APPLICATION_PORT));

// Start the agent.
agent.start().catch(error => {
  console.error('\x1b[31merror:\x1b[0m Forest Admin agent failed to start\n');
  console.error('');
  console.error(error.stack);
  process.exit(1);
});
