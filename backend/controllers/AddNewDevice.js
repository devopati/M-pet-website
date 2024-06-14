import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import Device from "../models/Device.js";

const AddNewDevice = async (req, res) => {
  try {
    const { userId } = req.params;
    const newDevice = req.body;

    if (!userId) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "A user is required" });
      return;
    }

    const user = await User.findById(userId);

    if (!user) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "User does not exist" });
      return;
    }

    const device = new Device({
      userId: userId,
      ...newDevice,
    });

    await device.save();

    res
      .status(StatusCodes.OK)
      .json({ message: "New device has been created and is being monitored" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while adding device" });
  }
};

export default AddNewDevice;
