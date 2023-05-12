import express from "express";
import Stripe from "stripe";
import * as dotenv from "dotenv";
dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    // Receive the line items from the front-end and prepare the exact request format to send it to stripe
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1N4amoLMv4NVymadaddkOrGm",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({ url: session.url });
  // res.redirect(303, session.url);
});

export default router;
