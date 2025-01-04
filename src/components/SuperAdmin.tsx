import React from 'react';

interface Branch {
  name: string;
  workers: number;
  profits: number;
  phone: string;
  city: string;
}

interface SuperAdminProps {
  branches: Branch[];
}

// @ts-ignore: "بيانات", "جميع", "الفروع", "العمال", "الأرباح", "التليفون", "المدينة" are Arabic words
const SuperAdmin: React.FC<SuperAdminProps> = ({ branches }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">بيانات جميع الفروع</h2>
      <ul>
        {branches.map((branch, index) => (
          <li key={index} className="mb-4 p-4 border border-gray-300 rounded">
            <h3 className="font-semibold">{branch.name}</h3>
            <p>عدد العمال: {branch.workers}</p>
            <p>الأرباح: {branch.profits}</p>
            <p>رقم التليفون: {branch.phone}</p>
            <p>المدينة: {branch.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperAdmin;
