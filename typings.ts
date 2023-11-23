/* eslint-disable */
import {
  CollectionCustomizer,
  TAggregation,
  TConditionTree,
  TPaginatedFilter,
  TPartialRow,
  TSortClause
} from '@forestadmin/agent';

export type AddressesCustomizer = CollectionCustomizer<Schema, 'addresses'>;
export type AddressesRecord = TPartialRow<Schema, 'addresses'>;
export type AddressesConditionTree = TConditionTree<Schema, 'addresses'>;
export type AddressesFilter = TPaginatedFilter<Schema, 'addresses'>;
export type AddressesSortClause = TSortClause<Schema, 'addresses'>;
export type AddressesAggregation = TAggregation<Schema, 'addresses'>;

export type BillingInfosCustomizer = CollectionCustomizer<Schema, 'billing_infos'>;
export type BillingInfosRecord = TPartialRow<Schema, 'billing_infos'>;
export type BillingInfosConditionTree = TConditionTree<Schema, 'billing_infos'>;
export type BillingInfosFilter = TPaginatedFilter<Schema, 'billing_infos'>;
export type BillingInfosSortClause = TSortClause<Schema, 'billing_infos'>;
export type BillingInfosAggregation = TAggregation<Schema, 'billing_infos'>;

export type CommentsCustomizer = CollectionCustomizer<Schema, 'comments'>;
export type CommentsRecord = TPartialRow<Schema, 'comments'>;
export type CommentsConditionTree = TConditionTree<Schema, 'comments'>;
export type CommentsFilter = TPaginatedFilter<Schema, 'comments'>;
export type CommentsSortClause = TSortClause<Schema, 'comments'>;
export type CommentsAggregation = TAggregation<Schema, 'comments'>;

export type CouponsCustomizer = CollectionCustomizer<Schema, 'coupons'>;
export type CouponsRecord = TPartialRow<Schema, 'coupons'>;
export type CouponsConditionTree = TConditionTree<Schema, 'coupons'>;
export type CouponsFilter = TPaginatedFilter<Schema, 'coupons'>;
export type CouponsSortClause = TSortClause<Schema, 'coupons'>;
export type CouponsAggregation = TAggregation<Schema, 'coupons'>;

export type MessagesCustomizer = CollectionCustomizer<Schema, 'messages'>;
export type MessagesRecord = TPartialRow<Schema, 'messages'>;
export type MessagesConditionTree = TConditionTree<Schema, 'messages'>;
export type MessagesFilter = TPaginatedFilter<Schema, 'messages'>;
export type MessagesSortClause = TSortClause<Schema, 'messages'>;
export type MessagesAggregation = TAggregation<Schema, 'messages'>;

export type OrdersCustomizer = CollectionCustomizer<Schema, 'orders'>;
export type OrdersRecord = TPartialRow<Schema, 'orders'>;
export type OrdersConditionTree = TConditionTree<Schema, 'orders'>;
export type OrdersFilter = TPaginatedFilter<Schema, 'orders'>;
export type OrdersSortClause = TSortClause<Schema, 'orders'>;
export type OrdersAggregation = TAggregation<Schema, 'orders'>;

export type PlansCustomizer = CollectionCustomizer<Schema, 'plans'>;
export type PlansRecord = TPartialRow<Schema, 'plans'>;
export type PlansConditionTree = TConditionTree<Schema, 'plans'>;
export type PlansFilter = TPaginatedFilter<Schema, 'plans'>;
export type PlansSortClause = TSortClause<Schema, 'plans'>;
export type PlansAggregation = TAggregation<Schema, 'plans'>;

export type SubscriptionsCustomizer = CollectionCustomizer<Schema, 'subscriptions'>;
export type SubscriptionsRecord = TPartialRow<Schema, 'subscriptions'>;
export type SubscriptionsConditionTree = TConditionTree<Schema, 'subscriptions'>;
export type SubscriptionsFilter = TPaginatedFilter<Schema, 'subscriptions'>;
export type SubscriptionsSortClause = TSortClause<Schema, 'subscriptions'>;
export type SubscriptionsAggregation = TAggregation<Schema, 'subscriptions'>;

export type TicketsCustomizer = CollectionCustomizer<Schema, 'tickets'>;
export type TicketsRecord = TPartialRow<Schema, 'tickets'>;
export type TicketsConditionTree = TConditionTree<Schema, 'tickets'>;
export type TicketsFilter = TPaginatedFilter<Schema, 'tickets'>;
export type TicketsSortClause = TSortClause<Schema, 'tickets'>;
export type TicketsAggregation = TAggregation<Schema, 'tickets'>;

export type UsersCustomizer = CollectionCustomizer<Schema, 'users'>;
export type UsersRecord = TPartialRow<Schema, 'users'>;
export type UsersConditionTree = TConditionTree<Schema, 'users'>;
export type UsersFilter = TPaginatedFilter<Schema, 'users'>;
export type UsersSortClause = TSortClause<Schema, 'users'>;
export type UsersAggregation = TAggregation<Schema, 'users'>;


export type Schema = {
  'addresses': {
    plain: {
      'id': number;
      'user_id': number;
      'country': string;
      'city': string;
      'street': string;
      'number': string;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'user:id': number;
      'user:email': string;
      'user:signup_date': string;
      'user:lastname': string;
      'user:firstname': string;
      'user:identity_picture': string;
      'user:birthdate': string;
      'user:password': string;
      'user:cellphone': string;
      'user:is_blocked': boolean;
      'user:fullname': string;
      'user:subscription:id': number;
      'user:subscription:plan_id': number;
      'user:subscription:user_id': number;
      'user:subscription:subscription_date': string;
      'user:subscription:plan:id': number;
      'user:subscription:plan:name': string;
      'user:subscription:plan:monthly_cost': number;
      'user:subscription:plan:allowed_discount': number;
      'user:subscription:plan:dedicated_support': boolean;
      'user:subscription:plan:allowed_number_of_requests': number;
      'user:subscription:plan:has_access_to_premium': boolean;
    };
  };
  'billing_infos': {
    plain: {
      'id': number;
      'user_id': number;
      'card_number': string;
      'card_owner': string;
      'address': string;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'user:id': number;
      'user:email': string;
      'user:signup_date': string;
      'user:lastname': string;
      'user:firstname': string;
      'user:identity_picture': string;
      'user:birthdate': string;
      'user:password': string;
      'user:cellphone': string;
      'user:is_blocked': boolean;
      'user:fullname': string;
      'user:subscription:id': number;
      'user:subscription:plan_id': number;
      'user:subscription:user_id': number;
      'user:subscription:subscription_date': string;
      'user:subscription:plan:id': number;
      'user:subscription:plan:name': string;
      'user:subscription:plan:monthly_cost': number;
      'user:subscription:plan:allowed_discount': number;
      'user:subscription:plan:dedicated_support': boolean;
      'user:subscription:plan:allowed_number_of_requests': number;
      'user:subscription:plan:has_access_to_premium': boolean;
    };
  };
  'comments': {
    plain: {
      'id': number;
      'ticket_id': number;
      'comment_from': number;
      'message': string;
      'date': string;
    };
    nested: {
      'ticket': Schema['tickets']['plain'] & Schema['tickets']['nested'];
      'user': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'ticket:id': number;
      'ticket:owner': number;
      'ticket:opened_by': number;
      'ticket:date': string;
      'ticket:subject': string;
      'ticket:priority': 'low' | 'medium' | 'high';
      'ticket:is_resolved': boolean;
      'ticket:user_through_owner:id': number;
      'ticket:user_through_owner:email': string;
      'ticket:user_through_owner:signup_date': string;
      'ticket:user_through_owner:lastname': string;
      'ticket:user_through_owner:firstname': string;
      'ticket:user_through_owner:identity_picture': string;
      'ticket:user_through_owner:birthdate': string;
      'ticket:user_through_owner:password': string;
      'ticket:user_through_owner:cellphone': string;
      'ticket:user_through_owner:is_blocked': boolean;
      'ticket:user_through_owner:fullname': string;
      'ticket:user_through_owner:subscription:id': number;
      'ticket:user_through_owner:subscription:plan_id': number;
      'ticket:user_through_owner:subscription:user_id': number;
      'ticket:user_through_owner:subscription:subscription_date': string;
      'ticket:user_through_owner:subscription:plan:id': number;
      'ticket:user_through_owner:subscription:plan:name': string;
      'ticket:user_through_owner:subscription:plan:monthly_cost': number;
      'ticket:user_through_owner:subscription:plan:allowed_discount': number;
      'ticket:user_through_owner:subscription:plan:dedicated_support': boolean;
      'ticket:user_through_owner:subscription:plan:allowed_number_of_requests': number;
      'ticket:user_through_owner:subscription:plan:has_access_to_premium': boolean;
      'ticket:user_through_opened_by:id': number;
      'ticket:user_through_opened_by:email': string;
      'ticket:user_through_opened_by:signup_date': string;
      'ticket:user_through_opened_by:lastname': string;
      'ticket:user_through_opened_by:firstname': string;
      'ticket:user_through_opened_by:identity_picture': string;
      'ticket:user_through_opened_by:birthdate': string;
      'ticket:user_through_opened_by:password': string;
      'ticket:user_through_opened_by:cellphone': string;
      'ticket:user_through_opened_by:is_blocked': boolean;
      'ticket:user_through_opened_by:fullname': string;
      'ticket:user_through_opened_by:subscription:id': number;
      'ticket:user_through_opened_by:subscription:plan_id': number;
      'ticket:user_through_opened_by:subscription:user_id': number;
      'ticket:user_through_opened_by:subscription:subscription_date': string;
      'ticket:user_through_opened_by:subscription:plan:id': number;
      'ticket:user_through_opened_by:subscription:plan:name': string;
      'ticket:user_through_opened_by:subscription:plan:monthly_cost': number;
      'ticket:user_through_opened_by:subscription:plan:allowed_discount': number;
      'ticket:user_through_opened_by:subscription:plan:dedicated_support': boolean;
      'ticket:user_through_opened_by:subscription:plan:allowed_number_of_requests': number;
      'ticket:user_through_opened_by:subscription:plan:has_access_to_premium': boolean;
      'user:id': number;
      'user:email': string;
      'user:signup_date': string;
      'user:lastname': string;
      'user:firstname': string;
      'user:identity_picture': string;
      'user:birthdate': string;
      'user:password': string;
      'user:cellphone': string;
      'user:is_blocked': boolean;
      'user:fullname': string;
      'user:subscription:id': number;
      'user:subscription:plan_id': number;
      'user:subscription:user_id': number;
      'user:subscription:subscription_date': string;
      'user:subscription:plan:id': number;
      'user:subscription:plan:name': string;
      'user:subscription:plan:monthly_cost': number;
      'user:subscription:plan:allowed_discount': number;
      'user:subscription:plan:dedicated_support': boolean;
      'user:subscription:plan:allowed_number_of_requests': number;
      'user:subscription:plan:has_access_to_premium': boolean;
    };
  };
  'coupons': {
    plain: {
      'id': number;
      'user_id': number;
      'discount_amount': number;
      'discount_percent': number;
      'name': string;
      'used_in_x_orders': number;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'user:id': number;
      'user:email': string;
      'user:signup_date': string;
      'user:lastname': string;
      'user:firstname': string;
      'user:identity_picture': string;
      'user:birthdate': string;
      'user:password': string;
      'user:cellphone': string;
      'user:is_blocked': boolean;
      'user:fullname': string;
      'user:subscription:id': number;
      'user:subscription:plan_id': number;
      'user:subscription:user_id': number;
      'user:subscription:subscription_date': string;
      'user:subscription:plan:id': number;
      'user:subscription:plan:name': string;
      'user:subscription:plan:monthly_cost': number;
      'user:subscription:plan:allowed_discount': number;
      'user:subscription:plan:dedicated_support': boolean;
      'user:subscription:plan:allowed_number_of_requests': number;
      'user:subscription:plan:has_access_to_premium': boolean;
    };
  };
  'messages': {
    plain: {
      'id': number;
      'sender': number;
      'receiver': number;
      'message': string;
      'date': string;
    };
    nested: {
      'user_through_sender': Schema['users']['plain'] & Schema['users']['nested'];
      'user_through_receiver': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'user_through_sender:id': number;
      'user_through_sender:email': string;
      'user_through_sender:signup_date': string;
      'user_through_sender:lastname': string;
      'user_through_sender:firstname': string;
      'user_through_sender:identity_picture': string;
      'user_through_sender:birthdate': string;
      'user_through_sender:password': string;
      'user_through_sender:cellphone': string;
      'user_through_sender:is_blocked': boolean;
      'user_through_sender:fullname': string;
      'user_through_sender:subscription:id': number;
      'user_through_sender:subscription:plan_id': number;
      'user_through_sender:subscription:user_id': number;
      'user_through_sender:subscription:subscription_date': string;
      'user_through_sender:subscription:plan:id': number;
      'user_through_sender:subscription:plan:name': string;
      'user_through_sender:subscription:plan:monthly_cost': number;
      'user_through_sender:subscription:plan:allowed_discount': number;
      'user_through_sender:subscription:plan:dedicated_support': boolean;
      'user_through_sender:subscription:plan:allowed_number_of_requests': number;
      'user_through_sender:subscription:plan:has_access_to_premium': boolean;
      'user_through_receiver:id': number;
      'user_through_receiver:email': string;
      'user_through_receiver:signup_date': string;
      'user_through_receiver:lastname': string;
      'user_through_receiver:firstname': string;
      'user_through_receiver:identity_picture': string;
      'user_through_receiver:birthdate': string;
      'user_through_receiver:password': string;
      'user_through_receiver:cellphone': string;
      'user_through_receiver:is_blocked': boolean;
      'user_through_receiver:fullname': string;
      'user_through_receiver:subscription:id': number;
      'user_through_receiver:subscription:plan_id': number;
      'user_through_receiver:subscription:user_id': number;
      'user_through_receiver:subscription:subscription_date': string;
      'user_through_receiver:subscription:plan:id': number;
      'user_through_receiver:subscription:plan:name': string;
      'user_through_receiver:subscription:plan:monthly_cost': number;
      'user_through_receiver:subscription:plan:allowed_discount': number;
      'user_through_receiver:subscription:plan:dedicated_support': boolean;
      'user_through_receiver:subscription:plan:allowed_number_of_requests': number;
      'user_through_receiver:subscription:plan:has_access_to_premium': boolean;
    };
  };
  'orders': {
    plain: {
      'id': number;
      'user_id': number;
      'coupon_id': number;
      'initial_amount': number;
      'date': string;
      'paid': boolean;
      'pay_date': string;
      'amount_with_discount': number;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
      'coupon': Schema['coupons']['plain'] & Schema['coupons']['nested'];
    };
    flat: {
      'user:id': number;
      'user:email': string;
      'user:signup_date': string;
      'user:lastname': string;
      'user:firstname': string;
      'user:identity_picture': string;
      'user:birthdate': string;
      'user:password': string;
      'user:cellphone': string;
      'user:is_blocked': boolean;
      'user:fullname': string;
      'user:subscription:id': number;
      'user:subscription:plan_id': number;
      'user:subscription:user_id': number;
      'user:subscription:subscription_date': string;
      'user:subscription:plan:id': number;
      'user:subscription:plan:name': string;
      'user:subscription:plan:monthly_cost': number;
      'user:subscription:plan:allowed_discount': number;
      'user:subscription:plan:dedicated_support': boolean;
      'user:subscription:plan:allowed_number_of_requests': number;
      'user:subscription:plan:has_access_to_premium': boolean;
      'coupon:id': number;
      'coupon:user_id': number;
      'coupon:discount_amount': number;
      'coupon:discount_percent': number;
      'coupon:name': string;
      'coupon:used_in_x_orders': number;
      'coupon:user:id': number;
      'coupon:user:email': string;
      'coupon:user:signup_date': string;
      'coupon:user:lastname': string;
      'coupon:user:firstname': string;
      'coupon:user:identity_picture': string;
      'coupon:user:birthdate': string;
      'coupon:user:password': string;
      'coupon:user:cellphone': string;
      'coupon:user:is_blocked': boolean;
      'coupon:user:fullname': string;
      'coupon:user:subscription:id': number;
      'coupon:user:subscription:plan_id': number;
      'coupon:user:subscription:user_id': number;
      'coupon:user:subscription:subscription_date': string;
      'coupon:user:subscription:plan:id': number;
      'coupon:user:subscription:plan:name': string;
      'coupon:user:subscription:plan:monthly_cost': number;
      'coupon:user:subscription:plan:allowed_discount': number;
      'coupon:user:subscription:plan:dedicated_support': boolean;
      'coupon:user:subscription:plan:allowed_number_of_requests': number;
      'coupon:user:subscription:plan:has_access_to_premium': boolean;
    };
  };
  'plans': {
    plain: {
      'id': number;
      'name': string;
      'monthly_cost': number;
      'allowed_discount': number;
      'dedicated_support': boolean;
      'allowed_number_of_requests': number;
      'has_access_to_premium': boolean;
    };
    nested: {};
    flat: {};
  };
  'subscriptions': {
    plain: {
      'id': number;
      'plan_id': number;
      'user_id': number;
      'subscription_date': string;
    };
    nested: {
      'plan': Schema['plans']['plain'] & Schema['plans']['nested'];
      'user': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'plan:id': number;
      'plan:name': string;
      'plan:monthly_cost': number;
      'plan:allowed_discount': number;
      'plan:dedicated_support': boolean;
      'plan:allowed_number_of_requests': number;
      'plan:has_access_to_premium': boolean;
      'user:id': number;
      'user:email': string;
      'user:signup_date': string;
      'user:lastname': string;
      'user:firstname': string;
      'user:identity_picture': string;
      'user:birthdate': string;
      'user:password': string;
      'user:cellphone': string;
      'user:is_blocked': boolean;
      'user:fullname': string;
    };
  };
  'tickets': {
    plain: {
      'id': number;
      'owner': number;
      'opened_by': number;
      'date': string;
      'subject': string;
      'priority': 'low' | 'medium' | 'high';
      'is_resolved': boolean;
    };
    nested: {
      'user_through_owner': Schema['users']['plain'] & Schema['users']['nested'];
      'user_through_opened_by': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'user_through_owner:id': number;
      'user_through_owner:email': string;
      'user_through_owner:signup_date': string;
      'user_through_owner:lastname': string;
      'user_through_owner:firstname': string;
      'user_through_owner:identity_picture': string;
      'user_through_owner:birthdate': string;
      'user_through_owner:password': string;
      'user_through_owner:cellphone': string;
      'user_through_owner:is_blocked': boolean;
      'user_through_owner:fullname': string;
      'user_through_owner:subscription:id': number;
      'user_through_owner:subscription:plan_id': number;
      'user_through_owner:subscription:user_id': number;
      'user_through_owner:subscription:subscription_date': string;
      'user_through_owner:subscription:plan:id': number;
      'user_through_owner:subscription:plan:name': string;
      'user_through_owner:subscription:plan:monthly_cost': number;
      'user_through_owner:subscription:plan:allowed_discount': number;
      'user_through_owner:subscription:plan:dedicated_support': boolean;
      'user_through_owner:subscription:plan:allowed_number_of_requests': number;
      'user_through_owner:subscription:plan:has_access_to_premium': boolean;
      'user_through_opened_by:id': number;
      'user_through_opened_by:email': string;
      'user_through_opened_by:signup_date': string;
      'user_through_opened_by:lastname': string;
      'user_through_opened_by:firstname': string;
      'user_through_opened_by:identity_picture': string;
      'user_through_opened_by:birthdate': string;
      'user_through_opened_by:password': string;
      'user_through_opened_by:cellphone': string;
      'user_through_opened_by:is_blocked': boolean;
      'user_through_opened_by:fullname': string;
      'user_through_opened_by:subscription:id': number;
      'user_through_opened_by:subscription:plan_id': number;
      'user_through_opened_by:subscription:user_id': number;
      'user_through_opened_by:subscription:subscription_date': string;
      'user_through_opened_by:subscription:plan:id': number;
      'user_through_opened_by:subscription:plan:name': string;
      'user_through_opened_by:subscription:plan:monthly_cost': number;
      'user_through_opened_by:subscription:plan:allowed_discount': number;
      'user_through_opened_by:subscription:plan:dedicated_support': boolean;
      'user_through_opened_by:subscription:plan:allowed_number_of_requests': number;
      'user_through_opened_by:subscription:plan:has_access_to_premium': boolean;
    };
  };
  'users': {
    plain: {
      'id': number;
      'email': string;
      'signup_date': string;
      'lastname': string;
      'firstname': string;
      'identity_picture': string;
      'birthdate': string;
      'password': string;
      'cellphone': string;
      'is_blocked': boolean;
      'fullname': string;
    };
    nested: {
      'subscription': Schema['subscriptions']['plain'] & Schema['subscriptions']['nested'];
    };
    flat: {
      'subscription:id': number;
      'subscription:plan_id': number;
      'subscription:user_id': number;
      'subscription:subscription_date': string;
      'subscription:plan:id': number;
      'subscription:plan:name': string;
      'subscription:plan:monthly_cost': number;
      'subscription:plan:allowed_discount': number;
      'subscription:plan:dedicated_support': boolean;
      'subscription:plan:allowed_number_of_requests': number;
      'subscription:plan:has_access_to_premium': boolean;
    };
  };
};
