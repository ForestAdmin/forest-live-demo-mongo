import { Db } from 'mongodb';

export default async function populate(
  mongo: Db,
  tableName: string,
  numberOfElements: number,
  elementBuilder: (i: number) => unknown,
): Promise<string[]> {
  const elements = [];

  for (let i = 0; i < numberOfElements; i += 1) {
    const element = elementBuilder(i);
    elements.push(element);
  }

  const results = await mongo.collection(tableName).insertMany(elements);

  return Object.values(results.insertedIds).map(id => id.toString());
}
