import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/TrafficAnalyzer.css";

const directionsMap = {
  Clockwise: ["A", "B", "C", "D"],
  "Anti-Clockwise": ["A", "D", "C", "B"],
  "Up & Down": ["A", "C"],
  "Left & Right": ["B", "D"],
};

const TrafficAnalyzer = () => {
  const { direction, interval } = useSelector((state) => state.config);
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(interval);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const signalOrder = directionsMap[direction];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev + 1) % interval);
      setRemainingTime((prev) => (prev === 0 ? interval : prev - 1));

      if (remainingTime === 1) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % signalOrder.length);
        setTime(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [interval, remainingTime, signalOrder]);

  const currentSignal = signalOrder[currentIndex];
  const nextSignal = signalOrder[(currentIndex + 1) % signalOrder.length];

  return (
    <div className="analyzer-container">
      <h2 className="analyzer-title">Traffic Analyzer</h2>

      <div className="info-block">
        <div className="info-block-header">
          <button className="settings-button" onClick={() => navigate("/")}>
            &lt; Settings
          </button>
        </div>
        <div className="info-item">
          <strong>Time:</strong> {time} sec
        </div>
        <div className="info-item">
          <strong>Current Open:</strong> {currentSignal}
        </div>
        <div className="info-item">
          <strong>Next Open:</strong> {nextSignal}
        </div>
        <div className="info-item">
          <strong>Direction:</strong> {direction}
        </div>

        <div className="signal-container">
          <div className="signal-row">
            <button
              className={`signal-box ${
                currentSignal === "A" ? "green" : "red"
              }`}
              disabled={currentSignal !== "A"}
            >
              A
            </button>
          </div>
          <div className="signal-row">
            <button
              className={`signal-box ${
                currentSignal === "D" ? "green" : "red"
              }`}
              disabled={currentSignal !== "D"}
            >
              D
            </button>
            <button
              className={`signal-box ${
                currentSignal === "B" ? "green" : "red"
              }`}
              disabled={currentSignal !== "B"}
            >
              B
            </button>
          </div>
          <div className="signal-row">
            <button
              className={`signal-box ${
                currentSignal === "C" ? "green" : "red"
              }`}
              disabled={currentSignal !== "C"}
            >
              C
            </button>
          </div>
        </div>

        <div className="info-item">
          <strong>Remaining Time:</strong> {remainingTime} sec
        </div>
      </div>
    </div>
  );
};

export default TrafficAnalyzer;