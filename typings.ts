/* eslint-disable */
import {
  CollectionCustomizer,
  TAggregation,
  TConditionTree,
  TPaginatedFilter,
  TPartialRow,
  TSortClause
} from '@forestadmin/agent';

export type UsersCustomizer = CollectionCustomizer<Schema, 'users'>;
export type UsersRecord = TPartialRow<Schema, 'users'>;
export type UsersConditionTree = TConditionTree<Schema, 'users'>;
export type UsersFilter = TPaginatedFilter<Schema, 'users'>;
export type UsersSortClause = TSortClause<Schema, 'users'>;
export type UsersAggregation = TAggregation<Schema, 'users'>;

export type VehiclesCustomizer = CollectionCustomizer<Schema, 'vehicles'>;
export type VehiclesRecord = TPartialRow<Schema, 'vehicles'>;
export type VehiclesConditionTree = TConditionTree<Schema, 'vehicles'>;
export type VehiclesFilter = TPaginatedFilter<Schema, 'vehicles'>;
export type VehiclesSortClause = TSortClause<Schema, 'vehicles'>;
export type VehiclesAggregation = TAggregation<Schema, 'vehicles'>;


export type Schema = {
  'users': {
    plain: {
      'database': {signup_date: string; is_blocked: boolean};
      'contact': {email: string; cellphone: string};
      '_id': string;
      'identity@@@address@@@city': string;
      'identity@@@address@@@country': string;
      'identity@@@address@@@number': number;
      'identity@@@address@@@street': string;
      'identity@@@address@@@zip_code': string;
      'identity@@@birthdate': string;
      'identity@@@firstname': string;
      'identity@@@identity_picture': string;
      'identity@@@lastname': string;
      'identity@@@password': string;
    };
    nested: {};
    flat: {};
  };
  'vehicles': {
    plain: {
      'owner_id': string;
      'database': {registration_date: string; is_blocked: boolean};
      'properties': {color: string; manufacturer: string; model: string; vc_type: string; engine: {fuel: string; power: string; as400: {model: string; variant: string}}};
      'identity': {document: {url: string}; vin: string; vrm: string};
      '_id': string;
    };
    nested: {};
    flat: {};
  };
};
