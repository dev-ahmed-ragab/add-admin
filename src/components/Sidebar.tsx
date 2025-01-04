import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/admin">permission</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/reset-password">Reset Password</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
