"use client";

import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Link from "next/link";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGitHubSignIn = () => {
    // Implement GitHub sign-in functionality here
    console.log("Signing in with GitHub");
  };

  return (
    <div className="flex justify-center items-center h-screen px-4 sm:px-0">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Sign In</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              id="email"
              type="email"
              label={"Email"}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Input
              id="password"
              type="password"
              label={"Password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </Button>
            <div className="inline-block align-baseline">
              Don't have any account?
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/sign-up"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-flex items-center"
            onClick={handleGitHubSignIn}
          >
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9 23.115 9 22.77V20.81C5.47 21.37 4.79 19.13 4.79 19.13C4.275 17.78 3.705 17.42 3.705 17.42C2.585 16.5 3.795 16.515 3.795 16.515C5.05 16.605 5.72 17.785 5.72 17.785C6.81 19.652 8.61 19.11 9.065 18.77C9.17 18 9.5 17.437 9.86 17.096C7.18 16.755 4.34 15.765 4.34 11.25C4.34 9.945 4.8 8.85 5.75 8.01C5.63 7.669 5.23 6.479 5.85 4.89C5.85 4.89 6.87 4.52 8.99 6.04C9.9901 5.7232 11.0527 5.54608 12.12 5.55C13.1873 5.54608 14.2499 5.7232 15.26 6.04C17.38 4.52 18.4 4.89 18.4 4.89C19.02 6.479 18.62 7.669 18.5 8.01C19.45 8.85 19.91 9.935 19.91 11.25C19.91 15.78 17.065 16.745 14.38 17.085C14.825 17.5 15.215 18.3 15.215 19.49V22.77C15.215 23.12 15.41 23.5 16.025 23.385C20.565 21.795 24 17.31 24 12C24 5.37 18.63 0 12 0Z"
                fill="currentColor"
              />
            </svg>
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
