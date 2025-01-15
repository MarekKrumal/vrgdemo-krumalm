import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navod from "./routes/Navod";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navod" element={<Navod />} />
      </Routes>
    </>
  );
}
