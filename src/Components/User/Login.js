import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
const provider = new GoogleAuthProvider();
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.pwd)
      .then((res) => {
        setError("");
       
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  if (!loading) {
    if (user) {
      const data = { email: user.email };

      fetch("https://young-beach-37066.herokuapp.com/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((rdata) => {
            localStorage.setItem('token',rdata.token)
             navigate(from, { replace: true });
        });
    }
  }
  return (
    <>
      <div className="text-3xl uppercase text-center py-1">
        <h1>LOG IN TO YOUR ACCOUNT</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded shadow bg-green-400 p-4 text-white uppercase text-3xl w-4/5 lg:w-2/5 mx-auto  mt-10"
      >
        <div className="">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="  text-2xl w-full rounded text-black outline-none  py-1 px-2 ml-2 mt-2"
            type="email"
            placeholder="Enter your email"
          />
          <span className="text-blue-500 italic text-xs block px-2 py-2">
            {errors.email && "Plz Enter your email"}
          </span>
        </div>
        <div className="mt-2">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            {...register("pwd", { required: true })}
            className="  text-2xl w-full rounded text-black outline-none   py-1 px-2 ml-2 mt-2"
            type="password"
            placeholder="Password"
          />
          <span className="text-blue-500 italic text-xs block px-2 py-2">
            {errors.pwd && "Plz Enter your password"}
          </span>
        </div>
        <div>
          <span className="text-xs text-white">{error && error}</span>
        </div>
        <div className="flex items-center my-2">
          <button className="btn border-none outline-none btn-secondary  mx-2 block my-2">
            Login
          </button>
          <Link to="/signup" className="text-sm link text-blue-500">
            Create an account
          </Link>
        </div>
        <div className="divider">OR</div>
        <div>
          <button
            type="button"
            className="btn btn-ghost text-white"
            onClick={() => {
              signInWithPopup(auth, provider);
            }}
          >
            Continue with Google
          </button>
        </div>
      </form>

      <div></div>
    </>
  );
};

export default Login;
