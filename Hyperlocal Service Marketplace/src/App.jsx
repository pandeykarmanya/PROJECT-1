import { Routes, Route , Navigate } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/HomePage'; 
import AdminDashboard from './pages/AdminDashboard';
import ProviderDashboard from "./pages/ProviderDashboard";
import CreateServicePage from './pages/createServicePage';
import AllServicesPage from './pages/ServiceDetailsPage';
import { useAuth } from './hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/services" element={<AllServicesPage/>} />

        <Route
          path="/create-service"
          element={
            <ProtectedRoute>
              <CreateServicePage />
            </ProtectedRoute>
          }
        />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route
          path="/provider-dashboard"
          element={
            <ProtectedRoute>
              <ProviderDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;