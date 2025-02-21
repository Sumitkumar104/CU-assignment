import React, { useState } from "react";
import InputForm from "../components/InputForm";
import ResponseDisplay from "../components/ResponseDisplay";

const Home = () => {
  const [response, setResponse] = useState(null);

  return (
    <div className="container">
      <h1>JSON Input Processor</h1>
      <InputForm setResponse={setResponse} />
      {response && <ResponseDisplay response={response} />}
    </div>
  );
};

export default Home;
