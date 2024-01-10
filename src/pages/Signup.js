import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupAsync } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import store from "../store";

// Components
const Stepper = ({ currentInputField }) => {
  return (
    <div className=" flex justify-between w-1/3 mt-5">
      <aside
        className={`${
          currentInputField.input === "email" ? "bg-red-500" : "bg-gray-200"
        }   h-1 flex-grow mx-2 hover:cursor-pointer`}
      >
        {" "}
      </aside>
      <aside
        className={`${
          currentInputField.input === "name" ? "bg-red-500" : "bg-gray-200"
        }  h-1 flex-grow mx-2 hover:cursor-pointer`}
      >
        {" "}
      </aside>
      <aside
        className={`${
          currentInputField.input === "username" ? "bg-red-500" : "bg-gray-200"
        }  h-1 flex-grow mx-2 hover:cursor-pointer`}
      >
        {" "}
      </aside>
      <aside
        className={`${
          currentInputField.input === "password" ? "bg-red-500" : "bg-gray-200"
        }  h-1 flex-grow mx-2 hover:cursor-pointer`}
      >
        {" "}
      </aside>
    </div>
  );
};

const Heading = ({ text }) => {
  return (
    <h1 className="text-3xl font-FF font-bold text-center max-sm:text-xl">
      {text}
    </h1>
  );
};

const SubHeading = ({ text }) => {
  return (
    <p className="text-gray-400 font-FF font-bold text-xl tracking-wider max-sm:text-base">
      {text}
    </p>
  );
};

const InputField = ({
  id,
  placeholder,
  value,
  changeHandler,
  type,
  label,
  invalidMessage,
  title,
  enableMinLength,
  enablePattern,
}) => {
  return (
    <aside className="relative  w-full h-1/5">
      <input
        className="text-black peer w-full rounded-md border p-2 pl-4 pt-4 bg-gray-50 border-transparent  placeholder-transparent 
         focus:invalid:border-fuchsia-400 focus:invalid:ring-fuchsia-400  placeholder-shown:border-fuchsia-400 placeholder-shown:ring-fuchsia-400
         placeholder-shown:bg-fuchsia-100 focus:bg-gray-50 focus:invalid:outline-none"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        type={type}
        title={title}
        minLength={enableMinLength !== undefined && enableMinLength ? "8" : "1"}
        pattern={
          enablePattern
            ? "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$"
            : ".*"
        }
      />
      <label
        htmlFor="email"
        className="absolute -top-1 left-2 pt-2 cursor-text bg-transparent px-1 text-xs font-bold text-gray-700 transition-all
        peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-semibold peer-focus:-top-1 peer-focus:text-xs 
        peer-focus:font-bold peer-placeholder-shown:text-fuchsia-600 peer-focus:text-gray-700"
      >
        {label}
      </label>
      <span className=" justify-start items-center hidden peer-invalid:flex peer-placeholder-shown:flex  peer-focus:invalid:flex text-fuchsia-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <small className="ml-1 font-medium ">{invalidMessage}</small>
      </span>
    </aside>
  );
};

const Button = ({ isDisabled, changeCurrentInputField }) => {
  return (
    <button
      className="p-5 disabled:cursor-not-allowed border rounded-3xl disabled:border-gray-300 disabled:text-gray-400 bg-red-600 
        text-white disabled:bg-transparent transition-all ease-in"
      disabled={isDisabled}
      onClick={changeCurrentInputField}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  );
};

const PasswordChecker = ({ check, text }) => {
  if (check)
    return (
      <aside className="w-full flex justify-start items-center space-x-2">
        <span className="p-1 bg-green-400 text-white rounded-md border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataslot="icon"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </span>
        <p className="grow text-sm text-green-400 font-semibold max-sm:text-xs">
          {text}
        </p>
      </aside>
    );
  else
    return (
      <aside className="w-full flex justify-start items-center space-x-2">
        <span className="p-1 bg-gray-300 text-white rounded-md border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataslot="icon"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
        <p className="grow text-sm text-gray-400 font-semibold max-sm:text-xs">
          {text}
        </p>
      </aside>
    );
};

// Tabs
const Email = ({ email, setInput, changeCurrentInputField }) => {
  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, email: e.target.value }));
  };
  return (
    <div className="bg-transparent flex-grow flex flex-col space-y-8 items-center w-1/2 pb-10 max-lg:w-11/12">
      <Heading text={"What's your email?"} />
      <SubHeading text={"Don't worry we won't tell anyone"} />
      <InputField
        id="email"
        placeholder="EMAIL"
        value={email}
        changeHandler={changeHandler}
        type="email"
        label="EMAIL"
        invalidMessage="You must enter a valid email"
      />

      <footer className="flex flex-col grow justify-end items-center space-y-6">
        <Button
          isDisabled={validateEmail(email) ? false : true}
          changeCurrentInputField={changeCurrentInputField}
        />
        <h1 className="text-sm font-bold uppercase hover:underline hover:cursor-pointer">
          already have an account?
        </h1>
      </footer>
    </div>
  );
};

const Name = ({ name, setInput, changeCurrentInputField }) => {
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, name: e.target.value }));
  };
  return (
    <div className="bg-transparent flex-grow flex flex-col space-y-8 items-center w-1/2 pb-10 max-lg:w-11/12">
      <Heading text="What should we at Scoop call you?" />
      <SubHeading text="Enter you name" />
      <InputField
        id="name"
        placeholder="NAME"
        value={name}
        changeHandler={changeHandler}
        type="text"
        label="NAME"
        invalidMessage="You must enter a valid name"
      />
      <footer className="flex flex-col grow justify-end items-center space-y-6">
        <Button
          isDisabled={name === ""}
          changeCurrentInputField={changeCurrentInputField}
        />
        <span className="text-sm text-transparent">.</span>
      </footer>
    </div>
  );
};

const Username = ({ username, setInput, changeCurrentInputField }) => {
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, username: e.target.value }));
  };
  return (
    <div className="bg-transparent flex-grow flex flex-col space-y-8 items-center w-1/2 pb-10 max-lg:w-11/12">
      <Heading text={"Choose a username"} />
      <SubHeading text="Used for sign in to our website" />
      <InputField
        id="username"
        placeholder="USERNAME"
        value={username}
        changeHandler={changeHandler}
        type="text"
        label="USERNAME"
        invalidMessage="You must enter a valid username"
      />
      <footer className="flex flex-col grow justify-end items-center space-y-6">
        <Button
          isDisabled={username === ""}
          changeCurrentInputField={changeCurrentInputField}
        />
        <span className="text-sm text-transparent">.</span>
      </footer>
    </div>
  );
};

const Password = ({ password, setInput, changeCurrentInputField }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, password: e.target.value }));
  };

  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  const isDisabled = () =>
    password.length < 8 ||
    confirmPassword.length < 8 ||
    password !== confirmPassword;

  return (
    <div className="bg-transparent flex-grow flex flex-col space-y-6 items-center w-1/2 pb-10 justify-center max-lg:w-11/12">
      <Heading text="Choose a password" />
      <SubHeading text="Make sure it's a good one" />
      <InputField
        id="password"
        placeholder="PASSWORD"
        value={password}
        changeHandler={changeHandler}
        type="password"
        label="PASSWORD"
        invalidMessage="You must enter a valid password"
        enableMinLength={true}
        enablePattern={true}
      />

      <section className="flex flex-col space-y-3">
        <PasswordChecker
          check={password.length >= 8}
          text="Password is at least 8 characters long"
        />
        <PasswordChecker
          check={passwordRegex.test(password)}
          text="Password includes two of the following: letter, number, or symbol"
        />
        <PasswordChecker
          check={password === confirmPassword && password.length >= 8}
          text="Password is equal to confirm password"
        />
      </section>

      <InputField
        id="confirmPassword"
        placeholder="CONFIRM PASSWORD"
        value={confirmPassword}
        changeHandler={confirmPasswordChangeHandler}
        type="password"
        label="CONFIRM PASSWORD"
        invalidMessage="You must enter a valid password"
        enableMinLength={true}
        enablePattern={true}
      />

      <footer className="flex flex-col grow justify-end items-center space-y-6">
        <Button
          isDisabled={isDisabled()}
          changeCurrentInputField={changeCurrentInputField}
        />
        <span className="text-sm text-transparent">.</span>
      </footer>
    </div>
  );
};

const Tabs = ({ tab, input, setInput, changeCurrentInputField }) => {
  switch (tab) {
    case "email":
      return (
        <Email
          email={input.email}
          setInput={setInput}
          changeCurrentInputField={changeCurrentInputField}
        />
      );

    case "name":
      return (
        <Name
          name={input.name}
          setInput={setInput}
          changeCurrentInputField={changeCurrentInputField}
        />
      );

    case "username":
      return (
        <Username
          username={input.username}
          setInput={setInput}
          changeCurrentInputField={changeCurrentInputField}
        />
      );

    case "password":
      return (
        <Password
          password={input.password}
          setInput={setInput}
          changeCurrentInputField={changeCurrentInputField}
        />
      );
    default:
      return <h1>Error loading tabs, please reload</h1>;
  }
};

const Signup = () => {
  const [input, setInput] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });
  const [currentInputField, setCurrentInputField] = useState({
    input: "email",
    next: {
      input: "name",
      next: { input: "username", next: { input: "password" } },
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeCurrentInputField = () => {
    if (currentInputField.next) {
      setCurrentInputField((prev) => prev.next);
    }
    // Enter actual function to register user here
    else {
      handleSignUp();
    }
  };

  const authStateError = useSelector((state) => state.auth.signup.error);

  const handleToastOnClose = () => {
    console.log("onClose");
    navigate("/");
  };

  const handleSignUp = () => {
    try {
      const [firstName, lastName] = input.name.split(" ");
      const completeUser = {
        FirstName: firstName,
        LastName: lastName,
        UserName: input.username,
        Email: input.email,
        Password: input.password,
      };
      dispatch(signupAsync(completeUser))
        .unwrap()
        .then(() => {
          toast.success(`Signed up as ${input.email}... Redirecting...`, {
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
        .catch(() => {
          console.log(store.getState().auth.signup.error.response.data.error);
          toast.error(store.getState().auth.signup.error.response.data.error || "Unknown Error", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    } catch (error) {
      console.log("try catch", error);
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

  return (
    <>
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
      <div
        className="relative font-FF flex justify-end items-center bg-[url(https://github.blog/wp-content/uploads/2020/12/102573561-8e872300-40a3-11eb-9feb-b480aeae0564.png)]
     bg-cover bg-center  w-screen h-screen max-sm:flex-col max-sm:bg-cover max-sm:bg-top"
      >
        <h1 className="text-white text-7xl max-w-sm bottom-1/3 left-[10%] max-sm:max-w-full max-sm:text-2xl max-sm:-mt-5 sm:absolute font-black max-lg:left-5 max-lg:text-5xl max-lg:bottom-1/2">
          CREATE AN ACCOUNT
        </h1>
        <main className="mx-10  bg-white min-h-[80%] max-h-fit rounded-lg shadow-md w-5/12 flex flex-col items-center space-y-14 max-xl:w-1/2 max-sm:w-11/12 max-sm:my-10">
          <Stepper currentInputField={currentInputField} />
          <Tabs
            tab={currentInputField.input}
            input={input}
            setInput={setInput}
            changeCurrentInputField={changeCurrentInputField}
            dispatch={dispatch}
          />
        </main>
      </div>
    </>
  );
};

export default Signup;
