import { faker } from '@faker-js/faker';

import { Db } from 'mongodb';
import populate from './utils';

export default async function populateProfiles(mongo: Db): Promise<string[]> {
  const tableName = 'profiles';

  return populate(mongo, tableName, 15_000, () => ({
    identity: {
      address: {
        street: faker.location.street(),
        number: faker.number.int({ min: 1, max: 1000 }),
        zip_code: faker.location.zipCode(),
        city: faker.location.city(),
        country: faker.location.country(),
      },
      birthdate: faker.date.past(),
      bio: faker.lorem.lines(8),
    },
    contact: {
      cellphone: faker.phone.number(),
    },
    database: {
      signup_date: faker.date.past(),
      is_blocked: faker.datatype.boolean(),
    },
    user_id: faker.helpers.rangeToNumber({ min: 1, max: 1456 }),
  }));
}
