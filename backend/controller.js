const { processData } = require("./services");

exports.handlePostRequest = (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: "Invalid input data" });
    }

    const response = processData(data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ is_success: false, error: "Internal Server Error" });
  }
};

exports.handleGetRequest = (req, res) => {
  return res.status(200).json({ operation_code: 1 });
};
