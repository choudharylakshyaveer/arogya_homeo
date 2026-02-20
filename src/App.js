import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";

function Admin() {
  return <h1>Admin Dashboard</h1>;
}

function Dashboard() {
  return <h1>User Dashboard</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
