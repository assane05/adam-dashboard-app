import logo from "./logo.svg";
// import "./App.css";
import Login from "./components/login/index";
import Register from "./components/register/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
