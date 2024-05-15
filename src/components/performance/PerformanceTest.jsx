import { useState } from "react";
import "./performance.css";
import Loader from "../loader/Loader";
import Table from "../table/Table";

function PerformanceTest() {
  const [socketURL, setSocketURL] = useState("");
  const [performanceData, setPerformanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState([
    { id: Math.random().toString(36).substr(2, 9), name: "" },
  ]);

  const handleAddInput = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { id: Math.random().toString(36).substr(2, 9), name: "" },
    ]);
  };

  const handleRemoveInput = (index) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs.splice(index, 1);
      return updatedInputs;
    });
  };

  const handleInputChange = (index, value) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index].name = value;
      return updatedInputs;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when submitting the form

    const response = await fetch("http://localhost:5000/api/performance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // ws://127.0.0.1:9222/devtools/browser/95b569f2-f442-4410-90c6-e2bc72440972
      body: JSON.stringify({
        websocketURL: socketURL,
        urls: inputs,
      }),
    });

    const data = await response.json();
    setPerformanceData(data);
    setLoading(false);
    setInputs([{ id: Math.random().toString(36).substr(2, 9), name: "" }]);
    // console.log(data);
  };

  return (
    <>
      <div className="performance-check-component">
        <div className="main">
          <form className="input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="text-input"
              placeholder="Enter your WebSocket URL"
              value={socketURL}
              onChange={(e) => setSocketURL(e.target.value)}
            />
            {inputs.map((input, index) => (
              <div key={index} className="input-container">
                <input
                  type="text"
                  className="text-input"
                  placeholder="Enter your link"
                  value={input.name}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                {index === inputs.length - 1 ? (
                  <button
                    type="button"
                    className="action-button add-button"
                    onClick={handleAddInput}
                  >
                    +
                  </button>
                ) : (
                  <button
                    type="button"
                    className="action-button remove-button"
                    onClick={() => handleRemoveInput(index)}
                  >
                    -
                  </button>
                )}
              </div>
            ))}
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? <Loader /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <div className="performance-check-component">
        <Table performanceData={performanceData} />
      </div>
    </>
  );
}

export default PerformanceTest;
