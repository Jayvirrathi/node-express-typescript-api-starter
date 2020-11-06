import express from "express";
const emojis = require("./emojis");
const router = express.Router();

router.get("/", (_, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);

module.exports = router;
