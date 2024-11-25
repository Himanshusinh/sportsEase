import { auth, db, googleProvider } from "../auth/firebase.js"; // Import Firebase setup
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const Signuppage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState(""); // To track password mismatch errors

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Validate password and confirmPassword in real-time
    if (e.target.name === "confirmPassword" || e.target.name === "password") {
      if (e.target.value !== formData.password && e.target.name === "confirmPassword") {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  };

  // Handle signup
  const handleSignup = async () => {
    const { username, email, password, confirmPassword } = formData;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save all user data (username, email, password, confirmPassword) in Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username,
        email,
        password, // Storing the password (hashed in Firebase Auth)
        confirmPassword, // Optional: If you insist on storing this for your purpose
      });

      alert("Signup successful!");
      // Reset form data after successful signup
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert(error.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save Google user data in Firestore (optional)
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username: user.displayName || "",
        email: user.email,
      });

      alert("Google login successful!");
    } catch (error) {
      console.error("Error with Google login:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex bg-[#EAEAEA] h-[100vh]">
      <div>
        <div className="flex mt-24 ml-20">
          <h1 className="text-8xl font-bold z-10">Welcome!</h1>
          <img className="-ml-52 mt-20" src="src/assets/authImages/Tutto Ricco Marching.svg" alt="" />
        </div>
      </div>

      <div className="ml-24">
        <div className="flex flex-col mt-24 gap-5">
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-96 h-14 pl-3"
            type="text"
            placeholder="Username"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-96 h-14 pl-3"
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-96 h-14 pl-3"
            type="password"
            placeholder="Password"
          />
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-96 h-14 pl-3"
            type="password"
            placeholder="Confirm password"
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>

        <div>
          <button
            onClick={handleSignup}
            disabled={!!passwordError || !formData.username || !formData.email || !formData.password}
            className="w-96 bg-black text-white h-10 rounded-lg mt-6"
          >
            Signup
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <a>----------or login with-----------</a>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="w-12 cursor-pointer"
            onClick={handleGoogleLogin}
            src="src/assets/authImages/google.svg"
            alt="Google Login"
          />
        </div>
      </div>
    </div>
  );
};

export default Signuppage;