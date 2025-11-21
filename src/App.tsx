import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.tsx";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BaseLayout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
