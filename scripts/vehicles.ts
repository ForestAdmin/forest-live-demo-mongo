import { faker } from '@faker-js/faker';

import { Db } from 'mongodb';
import populate from './utils';

export default async function populateUsers(mongo: Db, userIds: unknown[]): Promise<string[]> {
  const tableName = 'vehicles';

  return populate(mongo, tableName, 15_000, () => ({
    owner_id: faker.helpers.arrayElement(userIds),
    properties: {
      color: faker.vehicle.color(),
      manufacturer: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      type: faker.vehicle.type(),
      engine: {
        fuel: faker.vehicle.fuel(),
        power: `${faker.number.int({ min: 1, max: 500 })} HP`,
        as400: {
          model: `#REF${faker.number.int({ min: 1, max: 75000 })}`,
          variant: `00${faker.number.int({ min: 10, max: 20 })}`,
        },
      },
    },
    identity: {
      document: {
        url: faker.helpers.arrayElement([
          'https://www.beneteau.com/sites/default/files/styles/hero_product/public/2022-09/hero-flyer8SPACEdeck.jpg.webp?itok=xm1kFH7F',
          'https://www.beneteau.com/sites/default/files/styles/hero_product/public/2022-10/GMR_First44_0521.jpg.webp?itok=qPA-sICh',
          'https://www.beneteau.com/sites/default/files/styles/hero_product/public/2023-08/intern_hero_desktop-oceanis37-1.jpg.webp?itok=2Puc8aUq',
          'https://www.beneteau.com/sites/default/files/styles/hero_product/public/2022-09/hero_flyer8sun.jpg.webp?itok=n74pN2gW',
          'https://www.beneteau.com/sites/default/files/styles/hero_product/public/2023-11/intern_hero_desktop-antares12-1920x640_1.jpg.webp?itok=IFdidcbg',
        ]),
      },
      vin: faker.vehicle.vin(),
      vrm: faker.vehicle.vrm(),
    },
    database: {
      registration_date: faker.date.past(),
      is_blocked: faker.datatype.boolean(),
    },
  }));
}
