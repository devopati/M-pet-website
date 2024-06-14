import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    uniqueName: String,
    consumptionCapacity: Number,
    identifier: Object,
    serialNo: String,
    hoursActive: {
      type: Number,
      default: 0,
    },
    isOn: {
      type: Boolean,
      default: false,
    },
    tokensConsumed: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Device", DeviceSchema);
