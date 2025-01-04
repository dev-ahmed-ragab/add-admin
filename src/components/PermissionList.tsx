import React from 'react';

interface Permission {
  username: string;
  email: string;
  permission: string;
  branch?: string;
}

interface PermissionListProps {
  permissions: Permission[];
}

const PermissionList: React.FC<PermissionListProps> = ({ permissions }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl mb-4">المدراء المضافين</h2>{' '}
      {/* This is Arabic text meaning "Added Managers" */}
      <ul>
        {permissions.map((admin, index) => (
          <li key={index} className="border-b p-2">
            <p>
              {admin.username} ({admin.email}) - {admin.permission}{' '}
              {admin.permission === 'Admin' && `فرع: ${admin.branch}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionList;
