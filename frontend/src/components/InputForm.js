import React, { useState } from "react";
import axios from "axios";
import validateJSON from "../utils/validateJSON";

const InputForm = ({ setResponse }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
        console.log("1")
      const parsedData = validateJSON(jsonInput);
      console.log("2");
      const res = await axios.post("https://cu-assignment-backend.onrender.com/bfhl", parsedData);
      setResponse(res.data);
    } catch (err) {
      setError("Invalid JSON format or API error.");
    }
  };

  return (
    <div>
      <textarea
        rows="5"
        placeholder='Enter JSON (e.g., {"data":["A","C","z"]})'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default InputForm;
