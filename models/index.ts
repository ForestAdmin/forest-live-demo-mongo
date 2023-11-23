import Mongoose from 'mongoose';
import type { ProfilesInterface } from './profiles';
import type { VehiclesInterface } from './vehicles';

import { profilesSchema } from './profiles';
import { vehiclesSchema } from './vehicles';

const connection = Mongoose.createConnection(process.env.DATABASE_URL);

export const profiles = connection.model<ProfilesInterface>('profiles', profilesSchema, 'profiles');
export const vehicles = connection.model<VehiclesInterface>('vehicles', vehiclesSchema, 'vehicles');

export default connection;
