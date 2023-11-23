import Mongoose from 'mongoose';

interface VehiclesInterface {
  owner_id: number;
  database: {
    registration_date: Date;
    is_blocked: boolean;
  };
  properties: {
    color: string;
    manufacturer: string;
    model: string;
    vc_type: string;
    engine: {
      fuel: string;
      power: string;
      as400: {
        model: string;
        variant: string;
      };
    };
  };
  identity: {
    document: {
      url: string;
    };
    vin: string;
    vrm: string;
  };
}

const vehiclesSchema = new Mongoose.Schema(
  {
    owner_id: Number,
    database: {
      registration_date: Date,
      is_blocked: Boolean,
    },
    properties: {
      color: String,
      manufacturer: String,
      model: String,
      vc_type: String,
      engine: {
        fuel: String,
        power: String,
        as400: {
          model: String,
          variant: String,
        },
      },
    },
    identity: {
      document: {
        url: String,
      },
      vin: String,
      vrm: String,
    },
  },
  {
    timestamps: false,
  },
);

export { VehiclesInterface, vehiclesSchema };
