import './App.css'
import {Route, Routes, BrowserRouter as Router, Navigate} from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
