import React, { useState } from "react";
import arrowImage from "../components/arrowicon.png";
import { useDispatch } from "react-redux";
import "./signinform_style.css";
import "react-toastify/dist/ReactToastify.css";

import { signinAsync } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";

const Signinform = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    staySignedIn: false,
  });

  const [focusedInput, setFocusedInput] = useState({
    email: false,
    password: false,
  });

  const [signInError, setSignInError] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  const handleFocus = (field) => {
    setFocusedInput({
      ...focusedInput,
      [field]: true,
    });
  };
  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocusedInput({
        ...focusedInput,
        [field]: false,
      });
    }
  };

  const handleToastOnClose = () => {
    console.log("onClose");
    navigate("/");
  }

  const handleSignIn = () => {
    try {
      const input = { Email: formData.email, Password: formData.password };
      console.log(input);
      dispatch(signinAsync(input))
        .unwrap()
        .then(() => {
          setSignInError(false);
          toast.success(`Signed in as ${formData.email}... Redirecting...`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            onClose: handleToastOnClose,
          });
        })
        .catch((rejectedValueOrSerializedError) => {
          setSignInError(true);
          toast.error(rejectedValueOrSerializedError.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("then catch", rejectedValueOrSerializedError);
        });

    } catch (error) {
      console.log("try catch", error);
      setSignInError(true);
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const navigate = useNavigate();

  return (
    <body className="boody">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="signinbox">
        <h1 className="signin">Sign In</h1>

        {/* <form onSubmit={handleSubmit}> */}
        <div className="input-container">
          {signInError && <p className="error-msg">Error Signing In!</p>}

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
            placeholder="Email"
            className={focusedInput.email || formData.email ? "focused" : ""}
            style={{ borderColor: signInError ? "purple" : "" }}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            id="password"
            name="password"
            onFocus={() => handleFocus("password")}
            onBlur={() => handleBlur("password")}
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={
              focusedInput.password || formData.password ? "focused" : ""
            }
            style={{ borderColor: signInError ? "purple" : "" }}
            required
          />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="staySignedIn"
            name="staySignedIn"
            checked={formData.staySignedIn}
            onChange={handleChange}
          />
          <label htmlFor="staySignedIn" className="staysignin">
            Stay signed in
          </label>
        </div>

        {/* </form> */}
        <div className="bottom-section">
          {
            <div className="arrow-box" onClick={handleSignIn}>
              <img src={arrowImage} alt="Arrow" />
            </div>
          }
          <p className="belowbox">Can't Sign in?</p>
          <p className="belowcant">Create Account</p>
        </div>
      </div>
    </body>
   
  );
};

export default Signinform;
