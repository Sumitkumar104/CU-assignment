const express = require("express");
const { handlePostRequest, handleGetRequest } = require("./controller");

const router = express.Router();

// POST Route
router.post("/", handlePostRequest);

// GET Route
router.get("/", handleGetRequest);

module.exports = router;
