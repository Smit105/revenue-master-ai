export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p className="mb-6 text-gray-700">You are now logged in!</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
