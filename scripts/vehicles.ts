import { faker } from '@faker-js/faker';

import { Db } from 'mongodb';
import populate from './utils';

export default async function populateUsers(mongo: Db): Promise<string[]> {
  const tableName = 'vehicles';

  return populate(mongo, tableName, 15_000, () => ({
    owner_id: faker.helpers.rangeToNumber({ min: 1, max: 1456 }),
    properties: {
      color: faker.vehicle.color(),
      manufacturer: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      vc_type: faker.vehicle.type(),
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
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayAHIqu64U8E6MxJzlX_73yAq8NlSTKpIvDwgTE4Hnb9RzcybiXWiXo2NhAtrAGOPNvs&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KBckd2qmMae10y8Xso-sgsOa2o37IcIjb-FlHIclfW2MP7dGeCHVP9redHwOf1PACsE&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOaTPAJVMd05tI786M1Q5tNy3beduTxmaUV8-NH1Zjb1UwwM_a1FiV-pMyg8DbJA0mZU&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvVqEVHTAIrfEWM4Mcwt_hy4-_S_2RmWEwQjqdUVp3tsUDb1XarT7h5KYXCZlZ4FRgto&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcxoDcbynqt4NYdx3RfzBVthyW33xDvVtFCwBrA6utMv1JpfrwhMEP6UV8tDSJ7_ozlQ&usqp=CAU',
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
