import { StatusCodes } from "http-status-codes";
import Device from "../models/Device.js";
import User from "../models/User.js";
import mongoose from "mongoose";

const GetAllDevices = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);

    if (!user) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "User does not exist" });
      return;
    }

    const devices = await Device.aggregate([
      {
        $match: { userId: new mongoose.Types.ObjectId(userId) },
      },
      {
        $project: {
          _id: 1,
          isOn: 1,
          uniqueName: 1,
          identifier: 1,
          tokensConsumed: 1,
          consumptionCapacity: 1,
          isOn: 1,
        },
      },
      {
        $sort: { createdAt: 1 },
      },
    ]).exec();

    res.status(StatusCodes.OK).json({ devices });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while retrieving all devices" });
  }
};

export default GetAllDevices;
