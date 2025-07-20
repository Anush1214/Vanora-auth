export default function AccountDetails() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
        <div className="mt-2 space-y-1 text-gray-700">
          <p><span className="font-medium">Name:</span> Anush Rao</p>
          <p><span className="font-medium">Email:</span> anush@example.com</p>
          <p><span className="font-medium">Phone:</span> +91 98765 43210</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
        <div className="mt-2 space-y-2">
          <button className="text-sm text-blue-600 hover:underline">Change Password</button><br />
          <button className="text-sm text-blue-600 hover:underline">Update Profile Info</button><br />
          <button className="text-sm text-blue-600 hover:underline">Manage Devices</button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
        <p className="text-sm text-gray-600 mt-1 mb-2">
          Delete your account and all associated data. This action is irreversible.
        </p>
        <button className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  )
}
