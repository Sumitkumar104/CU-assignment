const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bfhlRoutes = require("./routes");
const PORT=8000;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/bfhl", bfhlRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
