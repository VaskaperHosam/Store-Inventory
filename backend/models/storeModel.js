import mongoose from 'mongoose';

const storeInventorySchema = mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    addinfo:{
      type: String
    }
  },
  {
    timestamps: true,
  }
);

export const Store = mongoose.model('Store', storeInventorySchema);
