import { Routes, Route } from "react-router-dom";
import Start from "pages/Start";
import Login from "pages/Login";
import Detail from "pages/Detail";
import "common/reset.css";
import "common/style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:cafeId" element={<Detail />} />
    </Routes>
  );
}
export default App;
