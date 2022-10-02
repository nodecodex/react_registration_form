import React, { useState } from "react";
import "./registration.css";
import { useFormik } from "formik";
import { signUpSchema } from "../schema";

const initialValues = {
  full_name: "",
  username: "",
  email: "",
  password: "",
  cpassword: "",
};

const RegistrationForm = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (value, action) => {
        console.log(
          "🚀 ~ file: RegistrationForm.jsx ~ line 11 ~ RegistrationForm ~ ̥",
          value
        );
        action.resetForm()
      },
    });
  return (
    <>
      <div className="wrapper">
        <div className="form-left">
          <h2 className="text-uppercase">information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            molestie ac feugiat sed. Diam volutpat commodo.
          </p>
          <p className="text">
            <span>Sub Head:</span>
            Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo
            viverra. Praesent elementum facilisis leo vel.
          </p>
          <div className="form-field">
            <input type="submit" className="account" value="Have an Account?" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form-right">
          <h2 className="text-uppercase">Registration form</h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                className="input-field"
                autoComplete="off"
                value={values.full_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.full_name && touched.full_name ? (
                <p className="error_class">{errors.full_name}</p>
              ) : null}
            </div>

            <div className="col-sm-6 mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="input-field"
                autoComplete="off"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p className="error_class">{errors.username}</p>
              ) : null}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              className="input-field"
              name="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="error_class">{errors.email}</p>
            ) : null}
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-field"
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="error_class">{errors.password}</p>
              ) : null}
            </div>
            <div className="col-sm-6 mb-3">
              <label htmlFor="cpassword">Comfirm Password</label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                className="input-field"
                autoComplete="off"
                value={values.cpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.cpassword && touched.cpassword ? (
                <p className="error_class">{errors.cpassword}</p>
              ) : null}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="checkbox" className="option">
              I agree to the <a href="#">Terms and Conditions</a>
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
            </label>
          </div>
          <button type="submit" className="form-field btn btn-info text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
