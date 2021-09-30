const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Jetq4SEzJaMoxJbO9znRSwce3nbxumrQqLD4YJ3YcUtb2jZi2OWOVCD86MI9xXDaQsOjHanWr8Uzus3mxNTe2Sh00OsckL6gi"
);

//API

// -App config
const app = express();

// -Middle ware
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payyment req ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen Command
exports.api = functions.https.onRequest(app);

//eg endpt- http://localhost:5001/clone-1005/us-central1/api
