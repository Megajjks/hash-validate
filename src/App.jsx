import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
