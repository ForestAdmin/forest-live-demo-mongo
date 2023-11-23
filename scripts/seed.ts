/* eslint-disable no-console */
import 'dotenv/config';

import { MongoClient } from 'mongodb';

import createUsers from './users';
import createVehicles from './vehicles';

(async () => {
  const mongo = await MongoClient.connect(process.env.DATABASE_URL);
  const db = mongo.db();
  await db.dropDatabase();

  console.log('Creating users...');
  const userIds = await createUsers(db);
  console.log('Creating vehicles...');
  const vehicleIds = await createVehicles(db, userIds);
  console.log('Tables created!');

  await mongo.close();
})();
