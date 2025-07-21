import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import HikeDetailPage from "./pages/HikeDetailPage";
import HikeListPage from "./pages/HikeListPage";

function App() {
  return (
    <Router basename="/mytrailmap">
      <Routes>
        <Route path="/" element={<HikeListPage />} />
        <Route path="/hike/:id" element={<HikeDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
