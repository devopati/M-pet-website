import express from "express";
import AddNewDevice from "../controllers/AddNewDevice.js";
import RemoveDevice from "../controllers/RemoveDevice.js";
import GetAllDevices from "../controllers/GetAllDevices.js";
import GetSingleDevice from "../controllers/GetSingleDevice.js";
import UpdateDevice from "../controllers/UpdateDevice.js";

const router = express.Router();

router.route("/add/:userId").post(AddNewDevice);

router.route("/remove/:deviceId").delete(RemoveDevice);

router.route("/get/:userId").get(GetAllDevices);

router.route("/get-single/:deviceId").get(GetSingleDevice);

router.route("/update/:deviceId").patch(UpdateDevice);

export default router;
