import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import Login from "./auth/Login";
import Register from "./auth/Register";
import Community from "./pages/Community";
import Plans from "./pages/Plans";

import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/login" element={<Login setProgress={setProgress} />} />
          <Route path="/register" element={<Register />} />

          <Route path="/community" element={<Community setProgress={setProgress}/>} />
          <Route path="/plans" element={<Plans />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
