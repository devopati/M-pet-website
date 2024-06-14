import { StatusCodes } from "http-status-codes";
import Device from "../models/Device.js";

const RemoveDevice = async (req, res) => {
  try {
    const { deviceId } = req.params;

    const device = await Device.findById(deviceId);

    if (!device) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "This device does not exist" });
      return;
    }

    await Device.findByIdAndDelete(deviceId);

    res
      .status(StatusCodes.OK)
      .json({ message: "The device has been deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while removing device" });
  }
};

export default RemoveDevice;
