import { useState } from "react";
import { useDispatch } from "react-redux";
import { setConfig } from "../store/configSlice";
import { useNavigate } from "react-router-dom";
import "../styles/GlobalConfig.css";

const GlobalConfig = () => {
  const [direction, setDirectionValue] = useState("Clockwise");
  const [interval, setIntervalValue] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(setConfig({ direction, interval: parseInt(interval, 10) }));
    navigate("/analyzer");
  };

  return (
    <div className="global-config-container">
      <h1 className="main-title">Traffic Management System</h1>

      <h2 className="sub-title">Global Configuration</h2>

      <div className="config-block">
        <label className="config-label">Direction:</label>
        <select 
          className="config-select"
          value={direction} 
          onChange={(e) => setDirectionValue(e.target.value)}
        >
          <option value="Clockwise">Clockwise</option>
          <option value="Anti-Clockwise">Anti-Clockwise</option>
          <option value="Up & Down">Up & Down</option>
          <option value="Left & Right">Left & Right</option>
        </select>

        <label className="config-label">Interval (seconds):</label>
        <input 
          type="number" 
          className="config-input"
          value={interval} 
          onChange={(e) => setIntervalValue(e.target.value)} 
        />

        <button className="config-button" onClick={handleSubmit}>
          Save/Update
        </button>
      </div>
    </div>
  );
};

export default GlobalConfig;
