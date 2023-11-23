/* eslint-disable no-console */
import 'dotenv/config';

import { MongoClient } from 'mongodb';

import createUsers from './users';
import createVehicles from './vehicles';

(async () => {
  const mongo = (await MongoClient.connect(process.env.DATABASE_URL)).db();

  console.log('Creating users...');
  const userIds = await createUsers(mongo);
  const vehicleIds = await createVehicles(mongo, userIds);
  console.log('Tables created!');
})();
