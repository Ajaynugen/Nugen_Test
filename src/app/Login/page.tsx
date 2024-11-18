"use client";

import { UserPen } from "lucide-react";
import React, { useState } from "react";

function LoginComponents() {
  const [responseMessage, setResponseMessage] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  async function Clicklogin() {
    // const data = {
    //   email: userEmail,
    //   password: userPassword,
    // };

    const response = await fetch("https://randomuser.me/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setResponseMessage("Failed to fetch user data.");
      return;
    } else {
      const data = await response.json();
      if(data){
        setResponseMessage("login successfully")
      }else{
        setResponseMessage("login failed")
      }
    
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="shadow-2xl rounded-lg p-7 h-96 w-96 items-center justify-center">
        <div className="flex items-center justify-center gap-2 ">
          <div>
            <UserPen />
          </div>
          <div className="font-bold text-2xl">Login</div>
        </div>
        <div>
          <div className="flex w-64 gap-3 pt-8 font-bold">
            <label htmlFor="email">Email</label>
            <input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              id="email"
              className="ml-7 w-full border-2 border-black"
            ></input>
          </div>

          <div className="flex pt-4 w-64 ">
            <label htmlFor="password" className="font-bold ">
              Password
            </label>
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type="passoword"
              id="password"
              className="ml-3 w-full border-2 border-black"
            ></input>
          </div>

          <button
            className="px-8 py-2 bg-blue-500 text-white mt-3 pl-11 ml-11"
            onClick={() => Clicklogin()}
          >
            Login
          </button>
          {responseMessage && (
            <p
              className={`mt-2 text-center ${
                responseMessage === "Login successful!"
                  ? "text-red-600" 
                  : "text-green-600"  
              }`}
            >
              {responseMessage === "Login successful!" ? " ❌" : " ✅"}
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginComponents;
