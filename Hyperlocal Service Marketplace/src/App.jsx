import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import BookingPage from './pages/BookingPage';
import PaymentPage from "./pages/payment";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<BookingPage />} /> 
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;
