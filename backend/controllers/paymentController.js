const Razorpay = require("razorpay");
const crypto = require("crypto");

const createOrder = async (req, res) => {
  try {
    // Demo mode if Razorpay keys are missing
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return res.json({
        id: "demo_order_" + Date.now(),
        amount: req.body.amount * 100,
        currency: "INR",
        demo: true,
      });
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await instance.orders.create({
      amount: req.body.amount * 100,
      currency: "INR",
    });

    res.json(order);
  } catch (error) {
    console.log(error);

    // Demo fallback
    res.json({
      id: "demo_order_" + Date.now(),
      amount: req.body.amount * 100,
      currency: "INR",
      demo: true,
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return res.json({
        message: "Demo Payment Verified",
      });
    }

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (expectedSign === razorpay_signature) {
      return res.json({
        message: "Payment Verified",
      });
    }

    res.status(400).json({
      message: "Invalid Signature",
    });
  } catch (error) {
    console.log(error);

    res.json({
      message: "Demo Payment Verified",
    });
  }
};

module.exports = {
  createOrder,
  verifyPayment,
};