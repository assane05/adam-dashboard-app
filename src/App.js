import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/index";
import Register from "./components/register/index";
import DashboardView from "./components/dashboardView/index";
import AllCustomersListView from "./components/allCustomersListView/allCustomersListView";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-dashboard" element={<DashboardView />} />
          <Route path="/liste-all-users" element={<AllCustomersListView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
