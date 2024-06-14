import { StatusCodes } from "http-status-codes";
import Device from "../models/Device.js";

const GetSingleDevice = async (req, res) => {
  try {
    const { deviceId } = req.params;

    if (!deviceId) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "No device specified" });
      return;
    }

    const device = await Device.findById(deviceId);

    if (!device) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Device specified does not exist refresh page" });
      return;
    }

    device.tokensConsumed =
      Math.round(
        device.hoursActive * (device.consumptionCapacity / 1000) * 1000
      ) / 1000;

    await device.save();

    res.status(StatusCodes.OK).json({ device });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while retrieving this device" });
  }
};

export default GetSingleDevice;
