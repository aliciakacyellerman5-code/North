import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0A08] text-white">
      <form onSubmit={handleLogin} className="bg-[#15120F] p-8 rounded-xl w-96">
        <h1 className="text-3xl mb-6 font-bold text-center">NORTH Admin</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-black border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-black border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 p-3 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
