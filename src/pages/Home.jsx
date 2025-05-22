import React from "react";
import { auth } from "../firebase";

const Home = () => {
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-[#e6f7f6] px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800">
        Hello, {user?.displayName || "there"} 👋
      </h1>

      {/* You can add task sections or other UI from your design below */}
    </div>
  );
};

export default Home;
