import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import { CheckToken } from "./components/CheckToken";
import Registration from "./pages/Register";
import TodoList from "./pages/TodoList";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
import Layout from "./components/Layout";
import { AuthProvider } from "../context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />} />

          <Route element={<CheckToken element={<Layout />} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/todo" element={<TodoList />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
