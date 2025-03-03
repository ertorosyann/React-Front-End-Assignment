import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import CheckToken from "./components/CheckToken";
import Registration from "./pages/Register";
import Navbar from "./components/NavBar";
import TodoList from "./pages/TodoList";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route element={<CheckToken />}>
          <Route element={<Navbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/todo" element={<TodoList />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
