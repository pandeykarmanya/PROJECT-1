import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;