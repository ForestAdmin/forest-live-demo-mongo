import { faker } from '@faker-js/faker';

import { Db } from 'mongodb';
import populate from './utils';

export default async function populateUsers(mongo: Db): Promise<string[]> {
  const tableName = 'users';

  await mongo.dropCollection(tableName);

  return populate(mongo, tableName, 15_000, () => ({
    identity: {
      lastname: faker.person.lastName(),
      firstname: faker.person.firstName(),
      address: {
        street: faker.location.street(),
        number: faker.number.int({ min: 1, max: 1000 }),
        zip_code: faker.location.zipCode(),
        city: faker.location.city(),
        country: faker.location.country(),
      },
      identity_picture: faker.internet.avatar(),
      birthdate: faker.date.past(),
      password: faker.internet.password(),
    },
    contact: {
      email: faker.internet.email(),
      cellphone: faker.phone.number(),
    },
    database: {
      signup_date: faker.date.past(),
      is_blocked: faker.datatype.boolean(),
    },
  }));
}
