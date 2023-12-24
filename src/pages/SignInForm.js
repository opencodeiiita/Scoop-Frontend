import React, { useState } from "react";
import arrowImage from "../components/arrowicon.png";
import { useDispatch } from "react-redux";
import "./signinform_style.css";
import { signinAsync } from "../redux/authSlice";

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

  const handleSignIn = () => {
    setSignInError(true);
    try {
      const input = {UserName: formData.email, Password: formData.password};
      dispatch(signinAsync(input));
      setSignInError(false);
    } catch (error) {
      console.log(error);
      setSignInError(true);
    };
  };

  return (
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
          placeholder="Username"
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
  );
};

export default Signinform;
