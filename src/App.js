import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalConfig from "./components/GlobalConfig";
import TrafficAnalyzer from "./components/TrafficAnalyzer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlobalConfig />} />
        <Route path="/analyzer" element={<TrafficAnalyzer />} />
      </Routes>
    </Router>
  );
}

export default App;
