import { useState, useEffect, ChangeEvent } from 'react';
import SuperAdmin from '../components/SuperAdmin';
import Admin from '../components/Admin';

interface Branch {
  name: string;
  workers: number;
  profits: number;
  phone: string;
  city: string;
}

interface User {
  role: string;
  branch: string;
}

export default function AdminPage() {
  const [user, setUser] = useState<User>({ role: '', branch: '' });
  const [branches, setBranches] = useState<Branch[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<string>('');

  useEffect(() => {
    // Fetch data from session or cookies
    const userData: User = {
      role: '', // Default empty
      branch: '', // Default empty
    };
    setUser(userData);

    // Branch data for super admin
    const branchesData: Branch[] = [
      {
        name: 'Branch 1',
        workers: 10,
        profits: 1000,
        phone: '0123456789',
        city: 'Cairo',
      },
      {
        name: 'Branch 2',
        workers: 8,
        profits: 800,
        phone: '0123456788',
        city: 'Giza',
      },
      {
        name: 'Branch 3',
        workers: 12,
        profits: 1200,
        phone: '0123456787',
        city: 'Alexandria',
      },
      {
        name: 'Branch 4',
        workers: 15,
        profits: 1500,
        phone: '0123456786',
        city: 'Ismailia',
      },
      {
        name: 'Branch 5',
        workers: 20,
        profits: 2000,
        phone: '0123456785',
        city: 'Suez',
      },
    ];
    setBranches(branchesData);
  }, []);

  const handleBranchChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Control Panel</h1>
      {user ? (
        <>
          <label htmlFor="role" className="block text-sm font-medium mb-2">
            Select Admin Type:
          </label>
          <select
            id="role"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded mb-4"
          >
            <option value="">Select Admin Type</option>
            <option value="super_admin">Super Admin</option>
            <option value="admin">Admin</option>
          </select>
          {user.role === 'super_admin' ? (
            <SuperAdmin branches={branches} />
          ) : user.role === 'admin' ? (
            <>
              <label
                htmlFor="branch"
                className="block text-sm font-medium mb-2"
              >
                Select Branch:
              </label>
              <select
                id="branch"
                value={selectedBranch}
                onChange={handleBranchChange}
                className="w-full border border-gray-300 p-2 rounded mb-4"
              >
                {branches.map((branch, index) => (
                  <option key={index} value={branch.name}>
                    {branch.name}
                  </option>
                ))}
              </select>
              <Admin
                branch={
                  branches.find((branch) => branch.name === selectedBranch) ||
                  null
                }
              />
            </>
          ) : null}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
