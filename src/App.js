
import './App.css';
import Registration from './Registration';
import Login from './login';
import Driver from './Driver';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Admin from './Admin';



function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/driver">Driver Dashboard</Link> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
