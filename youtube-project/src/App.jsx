import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";

import "./App.scss";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation setSidebar={setSidebar} />}>
          <Route index element={<Home sidebar={sidebar} />} />
          <Route path="video/:categoryId/:videoId" element={<Video />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
