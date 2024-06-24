import axios from "axios";
import { StatusCodes } from "http-status-codes";

const mpesaStkPush = async (req, res, next) => {
  console.log(req.body);
  console.log(req.token);
  try {
    const token = req.token;
    const { phone, amount } = req.body;

    function formatNumberForMpesa(number) {
      const formattedNumber = number.replace(/\D/g, "");

      if (formattedNumber.startsWith("0")) {
        return "254" + formattedNumber.substring(1);
      }

      if (formattedNumber.startsWith("254")) {
        return formattedNumber;
      }

      return "254" + formattedNumber;
    }

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: 174379,
        Password:
          "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",
        Timestamp: "20160216165627",
        TransactionType: "CustomerPayBillOnline",
        Amount: amount.toFixed(0),
        PartyA: formatNumberForMpesa(phone),
        PartyB: 174379,
        PhoneNumber: formatNumberForMpesa(phone),
        CallBackURL: "https://www.CallBackURL.com",
        AccountReference: `${formatNumberForMpesa(phone)}`,
        TransactionDesc: "Payment for pet adoption",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.status(StatusCodes.OK).json({
      msg: "Payment initiated, enter your m-pesa pin to complete transaction",
      response,
    });
  } catch (error) {
    next(error);
  }
};

export default mpesaStkPush;
