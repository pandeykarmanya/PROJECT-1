import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<h1 className="text-2xl">Home Page</h1>} />
      </Routes>
    </>
  );
}