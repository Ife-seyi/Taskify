import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // update route if needed
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#e6f7f6] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gradient-to-r from-[#14b8a6] to-[#99f6e4] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login to your account
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <GoEyeClosed /> : <RxEyeOpen />}
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              to="/resetpassword"
              className="text-sm text-teal-700 hover:underline"
            >
              Forgotten password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          OR LOGIN WITH:
        </div>

        <div className="flex justify-center gap-8 mt-4">
          <FaApple className="text-2xl text-black cursor-not-allowed opacity-50" />
          <FcGoogle
            className="text-2xl cursor-pointer hover:scale-110 transition"
            onClick={handleGoogleLogin}
          />
        </div>

        <div className="mt-6 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-teal-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
