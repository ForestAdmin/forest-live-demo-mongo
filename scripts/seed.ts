/* eslint-disable no-console */
import 'dotenv/config';

import { MongoClient } from 'mongodb';

import createProfiles from './profiles';
import createVehicles from './vehicles';

(async () => {
  const mongo = await MongoClient.connect(process.env.DATABASE_URL);
  const db = mongo.db();
  await db.dropDatabase();

  console.log('Creating profiles...');
  const userIds = await createProfiles(db);
  console.log('Creating vehicles...');
  const vehicleIds = await createVehicles(db);
  console.log('Tables created!');

  await mongo.close();
})();
