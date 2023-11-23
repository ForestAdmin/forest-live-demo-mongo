import Mongoose from 'mongoose';
import type { UsersInterface } from './users';
import type { VehiclesInterface } from './vehicles';

import { usersSchema } from './users';
import { vehiclesSchema } from './vehicles';

const connection = Mongoose.createConnection(process.env.DATABASE_URL);

export const users = connection.model<UsersInterface>('users', usersSchema, 'users');
export const vehicles = connection.model<VehiclesInterface>('vehicles', vehiclesSchema, 'vehicles');

export default connection;
