import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@revenueaimaster.com" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
// This code defines a simple login page using React. It includes state management for email, password, and error messages.
// The handleLogin function checks the credentials and navigates to the dashboard if they are correct, otherwise it sets an error message.
// The page is styled using Tailwind CSS classes for a clean and modern look.
// The login form includes fields for email and password, and a submit button to trigger the login process.
// The page is responsive and centers the login form in the middle of the screen.
// The error message is displayed if the login attempt fails, providing feedback to the user.
// The login credentials are hardcoded for demonstration purposes, but in a real application, you would typically validate against a backend service.
// The useNavigate hook from react-router-dom is used to programmatically navigate to the dashboard upon successful login.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// The component is styled using Tailwind CSS for a modern and responsive design.
// The component uses functional components and hooks from React, making it easy to manage state and side effects.          