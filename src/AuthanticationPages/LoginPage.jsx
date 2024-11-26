import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth, googleProvider } from "../auth/firebase.js"; // Import Firebase setup and Google provider
import { signInWithPopup } from "firebase/auth"; // For Google Auth
import { useNavigate } from "react-router-dom"; // For navigation

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const [success, setSuccess] = useState(""); // For success message (e.g., password reset)
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      // Firebase login with email and password
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      setEmail("");
      setPassword("");
      setError(""); // Clear any errors after successful login
      navigate("/homepage"); // Redirect to homepage
    } catch (err) {
      console.error("Error during login:", err.message);
      setError("Wrong email or password. Please try again."); // Display error
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      alert("Google Login successful!");
      navigate("/homepage"); // Redirect to homepage
    } catch (err) {
      console.error("Google Login Error:", err.message);
      setError("Google login failed. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent. Please check your inbox.");
      setError(""); // Clear any previous errors
    } catch (err) {
      console.error("Error during password reset:", err.message);
      setError("Failed to send password reset email. Please try again.");
      setSuccess(""); // Clear any success message
    }
  };

  return (
    <div className="flex bg-[#EAEAEA] h-[100vh]">
      <div>
        <div className="flex mt-14 ml-20">
          <h1 className="text-8xl font-bold z-10">
            Welcome Back! <br /> Glad to see you, <br /> Again!
          </h1>
          <img className="-ml-52" src="src/assets/authImages/Fitz Volleyball.svg" alt="" />
        </div>
        <div className="mt-40 ml-20">
          <img src="src/assets/authImages/Fitz Online Sports.svg" alt="" />
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-24 gap-5">
          <input
            className="w-96 h-14 pl-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-96 h-14 pl-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="ml-60 mt-10">
          <a
            className="text-lg cursor-pointer"
            onClick={handleForgotPassword} // Trigger Forgot Password
          >
            Forgot password?
          </a>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error if any */}
        {success && <p className="text-green-500 mt-2">{success}</p>} {/* Display success message */}

        <div>
          <button
            onClick={handleLogin}
            disabled={!email || !password} // Disable button if email or password is empty
            className="w-96 bg-black text-white h-10 rounded-lg mt-6"
          >
            Login
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <a>----------or login with-----------</a>
        </div>

        <div
          className="flex justify-center bg-white rounded-2xl h-14 mt-10 cursor-pointer"
          onClick={handleGoogleLogin}
        >
          <img
            className="w-11 cursor-pointer"
            src="src/assets/authImages/google.svg"
            alt="Google Login"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;