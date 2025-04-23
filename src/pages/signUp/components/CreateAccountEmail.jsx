import { useState } from "react";
import senarImage from "../../../assets/images/senarLogo.png";
import appleIcon from "../../../assets/icons/appleIcon.png";
import googleIcon from "../../../assets/icons/googleIcon.png";
import styles from "./EmailForm.module.css";
import { useNavigate, Link } from "react-router-dom";

const CreateAccountEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordMode, setPasswordMode] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleContinue = () => {
    if (!isPasswordMode) {
      if (isValidEmail(email)) {
        setPasswordMode(true);
      } else {
        alert("Please enter a valid email address.");
      }
    } else {
      // If in password mode and password is valid, navigate to ChooseAccount
      if (password.length >= 6) {
        navigate("/chooseaccount");
      } else {
        alert("Please enter a valid password (at least 6 characters).");
      }
    }
  };

  return (
    <section className="h-screen bg-white flex flex-col overflow-hidden">
      <div className="pl-20 rounded-lg w-full mt-6 md:block hidden ">
        <img
          className="w-[105px] h-[18px] object-cover block"
          src={senarImage}
          alt=""
        />
      </div>

      <div className="flex justify-center md:items-center items-start flex-1 px-4 md:px-0 overflow-y-auto">
        <div className="flex flex-col w-full max-w-[30rem] md:mt-14 mt-6 md:mb-0 mb-4 md:gap-3 gap-5">
          <h1
            className="font-medium text-[32px] leading-[40px] text-[#222222]"
            style={{ fontFamily: "var(--font-type)" }}
          >
            Create a new account
          </h1>
          <p
            className="text-[14px] font-normal text-[#646464]"
            style={{ fontFamily: "var(--font-type)" }}
          >
            Enter details below to create your new account.
          </p>

          <h3
            className="font-normal text-[14px] text-[#222222]"
            style={{ fontFamily: "var(--font-type)" }}
          >
            {isPasswordMode ? "Password" : "Email"}
          </h3>
          <input
            className="border border-[#CCCCCC] px-4 py-4 rounded-md text-base outline-none placeholder-[#808080] "
            style={{ fontFamily: "var(--font-type)", gap: "10px" }}
            type={isPasswordMode ? "password" : "email"}
            placeholder={isPasswordMode ? "Enter password" : "Enter email"}
            value={isPasswordMode ? password : email}
            onChange={(e) =>
              isPasswordMode
                ? setPassword(e.target.value)
                : setEmail(e.target.value)
            }
            required
          />

          <button
            className="text-center py-2 text-[16px] font-medium leading-[140%] text-white rounded-md "
            style={{
              backgroundColor: "var(--primary-purple)",
              fontFamily: "var(--font-type)",
            }}
            onClick={handleContinue}
          >
            Continue
          </button>

          <p
            className={`text-[14px] font-normal leading-[20px] ${styles.loginText}`}
            style={{ fontFamily: "var(--font-type)" }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "var(--primary-purple)" }}
              className="px-2"
            >
              Login
            </Link>
          </p>

          <div
            className="flex items-center justify-center"
            style={{ fontFamily: "var(--font-type)" }}
          >
            <p className="my-3 font-normal text-[14px] text-[#999999]">OR</p>
          </div>
          <div
            className="flex flex-col md:gap-3 gap-5"
            style={{ fontFamily: "var(--font-type)" }}
          >
            <button className="border border-black rounded-lg w-full font-medium text-[16px] text-[#333333] flex items-center justify-center py-2 md:gap-2 gap-4">
              <img src={googleIcon} alt="Google" className="w-4 h-4" />
              Continue with Google
            </button>
            <button className="border border-black rounded-lg w-full font-medium text-[16px] text-[#333333] flex items-center justify-center py-2 md:gap-2 gap-4">
              <img src={appleIcon} alt="Apple" className="w-4 h-4" />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccountEmail;
