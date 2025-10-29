import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../_api"; 
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", { email, password });
      const { token, user } = res.data;

      // simpan token & user ke localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // arahkan ke dashboard sesuai role
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/"); // customer balik ke home
      }
    } catch (err) {
      console.error("Login gagal:", err);
      setError("Email atau password salah");
    }
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

        {error && (
          <p className="bg-red-500 text-white p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
