import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HikeDetailPage from "./pages/HikeDetailPage";
import HikeListPage from "./pages/HikeListPage";

import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "./App.css";

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
