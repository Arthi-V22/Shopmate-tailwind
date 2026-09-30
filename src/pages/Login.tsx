import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return "Email is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const validatePassword = (value: string) => {
    if (!value.trim()) {
      return "Password is required";
    }

    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }

    return "";
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);

    setErrors({
      ...errors,
      email: validateEmail(value),
    });
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    setErrors({
      ...errors,
      password: validatePassword(value),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    // Stop login if validation fails
    if (emailError || passwordError) {
      return;
    }

    // Login logic will go here
    console.log("Login successful");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mt-8">
            <label className="block text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => handlePasswordChange(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={
              !email ||
              !password ||
              !!errors.email ||
              !!errors.password
            }
            className="w-full bg-blue-600 text-white py-3 rounded-lg mt-7 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;