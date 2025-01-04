import { useState, useEffect } from 'react';
import InviteForm from '../components/InviteForm';
import PermissionList from '../components/PermissionList';

const Home = () => {
  const [permissions, setPermissions] = useState<any[]>([]);

  useEffect(() => {
    const storedPermissions = localStorage.getItem('permissions');
    if (storedPermissions) {
      setPermissions(JSON.parse(storedPermissions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('permissions', JSON.stringify(permissions));
  }, [permissions]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Staff Permissions Management</h1>
      <InviteForm permissions={permissions} setPermissions={setPermissions} />
      <h2 className="text-xl font-semibold mt-8">Permissions</h2>
      <PermissionList permissions={permissions} />
    </div>
  );
};

export default Home;
