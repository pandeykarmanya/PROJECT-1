import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login'; 
import Register from './pages/Register';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;