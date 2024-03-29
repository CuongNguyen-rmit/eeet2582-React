import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MyToaster from "../components/Toaster/MyToaster";
import toast from "react-hot-toast";

export default function IntroPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("execute");
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);
  return (
    <>
      <div className="mt-6 flex flex-col justify-center items-center">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Welcome to ProofReading App
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Helping all writter to get easy grammar fix by reading through
          uploading pdf document.
        </p>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          The app is only authorized by using Google protocal.
        </p>
      </div>
      <MyToaster />
    </>
  );
}
