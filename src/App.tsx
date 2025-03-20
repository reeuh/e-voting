import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
  )
}

export default App
