import Mongoose from 'mongoose';

interface UsersInterface {
  database: {
    signup_date: Date;
    is_blocked: boolean;
  };
  identity: {
    lastname: string;
    firstname: string;
    address: {
      street: string;
      number: number;
      zip_code: string;
      city: string;
      country: string;
    };
    identity_picture: string;
    birthdate: Date;
    password: string;
  };
  contact: {
    email: string;
    cellphone: string;
  };
}

const usersSchema = new Mongoose.Schema(
  {
    database: {
      signup_date: Date,
      is_blocked: Boolean,
    },
    identity: {
      lastname: String,
      firstname: String,
      address: {
        street: String,
        number: Number,
        zip_code: String,
        city: String,
        country: String,
      },
      identity_picture: String,
      birthdate: Date,
      password: String,
    },
    contact: {
      email: String,
      cellphone: String,
    },
  },
  {
    timestamps: false,
  },
);

export { UsersInterface, usersSchema };
