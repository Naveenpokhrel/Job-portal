"use client";
import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", password: "hello" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", password: "hello" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const [editUser, setEditUser] = useState(null);

  // Handle create new user
  const handleCreateUser = () => {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      },
    ]);
    setNewUser({ name: "", email: "", password: "" });
  };

  // Handle update user
  const handleUpdateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === editUser.id
          ? {
              ...user,
              name: editUser.name,
              email: editUser.email,
              password: editUser.password,
            }
          : user
      )
    );
    setEditUser(null);
  };

  // Handle delete user
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-xl mb-2">Create User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="p-2 border border-gray-300 mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="p-2 border border-gray-300 mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          className="p-2 border border-gray-300 mb-2"
        />
        <button
          onClick={handleCreateUser}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add User
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl mb-2">Users List</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Password</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">
                  {editUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editUser.name}
                      onChange={(e) =>
                        setEditUser({ ...editUser, name: e.target.value })
                      }
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="border p-2">
                  {editUser?.id === user.id ? (
                    <input
                      type="email"
                      value={editUser.email}
                      onChange={(e) =>
                        setEditUser({ ...editUser, email: e.target.value })
                      }
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="border p-2">
                  {editUser?.id === user.id ? (
                    <input
                      type="password"
                      value={editUser.password}
                      onChange={(e) =>
                        setEditUser({ ...editUser, password: e.target.value })
                      }
                    />
                  ) : (
                    "********" // Hide password by default
                  )}
                </td>
                <td className="border p-2">
                  {editUser?.id === user.id ? (
                    <button
                      onClick={handleUpdateUser}
                      className="bg-green-500 text-white p-2 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => setEditUser(user)}
                      className="bg-yellow-500 text-white p-2 rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white p-2 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
