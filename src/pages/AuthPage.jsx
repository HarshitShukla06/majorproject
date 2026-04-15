import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { useAuth } from "../context/AuthContext"; // useAuth for real login/signup

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login, signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      if (isLogin) {
        const email = formData.get("email");
        const password = formData.get("password");
        await login(email, password);
        navigate("/"); // ✅ After login → Home
      } else {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        await signup(name, email, password);
        setIsLogin(true); // ✅ After signup → go to login
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-12 w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-lg"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 ${
              isLogin ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
            } text-white text-lg font-semibold rounded-xl shadow-md transition duration-300`}
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-lg">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 cursor-pointer hover:underline font-medium"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;