import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
