import { useState } from "react";
import senarImage from "../../../assets/images/senarImage.png";
import appleIcon from "../../../assets/icons/appleIcon.png";
import googleIcon from "../../../assets/icons/googleIcon.png";
import styles from "./EmailForm.module.css";

const CreateAccountEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordMode, setPasswordMode] = useState(false);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleContinue = () => {
    if (isValidEmail(email)) {
      setPassword("");
      setPasswordMode(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="min-h-screen bg-white flex flex-col">
      <div className="pl-20 rounded-lg w-full mt-2 md:block hidden">
        <img
          className="w-[105px] h-[18px] object-cover block"
          src={senarImage}
          alt=""
        />
      </div>

      <div className="flex justify-center md:items-center items-start flex-grow px-4 md:px-0">
        <div className="flex flex-col w-full max-w-[30rem] md:m-28 mt-10 mb-10 md:gap-3 gap-5">
          <h1 className="font-semibold text-xl">Create a new account</h1>
          <p className="text-base font-thin text-[#646464]">
            Enter details below to create your new account.
          </p>

          <h3 className="font-normal text-base">
            {isPasswordMode ? "Password" : "Email"}
          </h3>
          <input
            className="border border-[#CCCCCC] px-3 rounded-md py-2 text-base outline-none placeholder-[#808080] "
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
            className="text-center py-2 text-base text-white rounded-md"
            style={{ backgroundColor: "var(--primary-purple)" }}
            onClick={handleContinue}
          >
            Continue
          </button>

          <p className={`text-base font-normal ${styles.loginText}`}>
            Already have an account?{" "}
            <span style={{ color: "var(--primary-purple)" }} className="px-2">
              Login
            </span>
          </p>

          <div className="flex items-center justify-center">
            <p className="my-3 font-light text-base text-black/60">OR</p>
          </div>
          <div className="flex flex-col md:gap-3 gap-5">
            <button className="border border-black rounded-lg w-full font-light text-base flex items-center justify-center py-2 md:gap-2 gap-4">
              <img src={googleIcon} alt="Google" className="w-4 h-4" />
              Continue with Google
            </button>
            <button className="border border-black rounded-lg w-full font-light text-base flex items-center justify-center py-2 md:gap-2 gap-4">
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
