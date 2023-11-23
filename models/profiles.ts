import Mongoose from 'mongoose';

interface ProfilesInterface {
  database: {
    signup_date: Date;
    is_blocked: boolean;
  };
  identity: {
    address: {
      street: string;
      number: number;
      zip_code: string;
      city: string;
      country: string;
    };
    birthdate: Date;
  };
  contact: {
    cellphone: string;
  };
  user_id: string;
}

const profilesSchema = new Mongoose.Schema(
  {
    database: {
      signup_date: Date,
      is_blocked: Boolean,
    },
    identity: {
      address: {
        street: String,
        number: Number,
        zip_code: String,
        city: String,
        country: String,
      },
      birthdate: Date,
    },
    contact: {
      cellphone: String,
    },
    user_id: Number,
  },
  {
    timestamps: false,
  },
);

export { ProfilesInterface, profilesSchema };
