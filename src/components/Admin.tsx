import React from 'react';

interface Branch {
  name: string;
  workers: number;
  profits: number;
  phone: string;
  city: string;
}

const Admin = ({ branch }: { branch: Branch | null }) => {
  if (!branch) {
    return <div>يرجى اختيار فرع لعرض البيانات</div>;
  }

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-bold mb-4">بيانات الفرع</h2>
      <ul>
        <li>اسم الفرع: {branch.name}</li>
        <li>عدد العمال: {branch.workers}</li>
        <li>الأرباح: {branch.profits}</li>
        <li>رقم التليفون: {branch.phone}</li>
        <li>المدينة: {branch.city}</li>
      </ul>
    </div>
  );
};

export default Admin;
