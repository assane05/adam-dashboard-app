import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/index";
import Register from "./components/register/index";
import DashboardView from "./components/dashboardView/index";
import AllCustomersListView from "./components/allCustomersListView/allCustomersListView";
import ChartsView from "./components/chartsView/chartsView";
import MessagesView from "./components/messagesView/messagesView";
import OdersView from "./components/odersView/odersView";
import Help from "./components/help/help";
import TasksView from "./components/tasksView/tasksView";
import UpdateFolders from "./components/updateFolders/updateFolders";
import ArticlesView from "./components/articlesView/articlesView";
import HomePageView from "./components/homePageView/homePageView";
import LoginAdmin from "./components/loginAdmin/loginAdmin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePageView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<LoginAdmin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-dashboard" element={<DashboardView />} />
          <Route path="/liste-all-users" element={<AllCustomersListView />} />
          <Route path="/charts" element={<ChartsView />} />
          <Route path="/messages" element={<MessagesView />} />
          <Route path="/orders" element={<OdersView />} />
          <Route path="/admin-tasks" element={<TasksView />} />
          <Route path="/help" element={<Help />} />
          <Route path="/update-to-folders" element={<UpdateFolders />} />
          <Route path="/liste-des-articles" element={<ArticlesView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
