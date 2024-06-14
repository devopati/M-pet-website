import { StatusCodes } from "http-status-codes";
import Device from "../models/Device.js";

const UpdateDevice = async (req, res) => {
  try {
    const { deviceId } = req.params;

    const { uniqueName, hoursActive, consumptionCapacity, isOn } = req.body;

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

    const fieldsToUpdate = {
      uniqueName: uniqueName,
      hoursActive: hoursActive,
      consumptionCapacity: consumptionCapacity,
      isOn: isOn,
    };

    await Device.updateOne({ _id: deviceId }, { $set: fieldsToUpdate });

    const hours = hoursActive ? hoursActive : device.hoursActive;

    const consumption = consumptionCapacity
      ? consumptionCapacity
      : device.consumptionCapacity;

    device.tokensConsumed =
      Math.round(hours * (consumption / 1000) * 1000) / 1000;

    await device.save();

    res.status(StatusCodes.OK).json({ message: "Device updated successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while updating device" });
  }
};

export default UpdateDevice;
