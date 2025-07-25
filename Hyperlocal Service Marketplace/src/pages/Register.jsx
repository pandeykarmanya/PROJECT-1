"use client";
import { Link } from "react-router-dom";
import RegisterForm from "../components/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block"></Link>
          <p className="text-orange-500 mt-2"></p>
        </div>

        <RegisterForm />

        <div className="mt-6 relative flex items-center justify-center">
          <div className="border-t border-gray-300 absolute w-full"></div>
          <div className="bg-white px-4 relative z-10 text-orange-500 text-sm">
            OR
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
