export default function Dashboard({ user, onLogout }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Welcome, {user.email}</h1>
        <button className="bg-gray-800 text-white px-4 py-2 rounded" onClick={onLogout}>
          Logout
        </button>
      </div>
      <p>This is your business dashboard demo.</p>
    </div>
  )
}