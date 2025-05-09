import React from 'react';
import { useState } from 'react';

export default function SignInForm({ onSignIn }) {
  const [formData, setFormData] = useState({ username: '', password: '' , hobby: '', age: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-black bg-white p-8 rounded-xl shadow-md w-80 space-y-6"
    >
      <h1 className="text-2xl font-semibold text-center">Sign In</h1>
      
      <div className="relative">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder="Username"
          className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent pt-6 pb-1 text-gray-900 placeholder-transparent"
        />
        <label
          htmlFor="username"
          className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Username
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          placeholder="Age"
          className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent pt-6 pb-1 text-gray-900 placeholder-transparent"
        />
        <label
          htmlFor="age"
          className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Age
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          name="hobby"
          value={formData.hobby}
          onChange={handleChange}
          required
          placeholder="Hobby"
          className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent pt-6 pb-1 text-gray-900 placeholder-transparent"
        />
        <label
          htmlFor="hobby"
          className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Hobby
        </label>
      </div>

      <div className="relative">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Password"
          className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent pt-6 pb-1 text-gray-900 placeholder-transparent"
        />
        <label
          htmlFor="password"
          className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Password
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Sign In
      </button>
    </form>
  );
}
