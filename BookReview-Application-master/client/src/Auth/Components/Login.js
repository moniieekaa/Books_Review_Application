import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Core/_request";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    document.body.classList.add("login-bg");
    return () => document.body.classList.remove("login-bg");
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await login(values.email, values.password);
        setUser(response.data.username);
        navigate("/BookListing");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <form
        onSubmit={formik.handleSubmit}
        className="login-form-animated d-flex flex-column align-items-center w-100"
      >
        <h1 className="login-title-animated" style={{fontFamily: 'Dancing Script, cursive', color: '#4f8cff', fontWeight: 700, fontSize: '2.5rem', letterSpacing: '1px'}}>Login</h1>
        <div className="w-100 mb-3">
          <label htmlFor="email" className="login-label">
            Email Address
          </label>
          <input
            className="login-input w-100"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="w-100 mb-3">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            className="login-input w-100"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit" className="login-btn-animated w-100 mt-2 mb-3">
          Login
        </button>
        <div className="d-flex justify-content-center gap-2 w-100">
          <span className="stylish-body">Don't have an account?</span>
          <Link to="/auth/registration" className="stylish-accent">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
