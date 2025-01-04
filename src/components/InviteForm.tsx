import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface InviteFormProps {
  permissions: any[];
  setPermissions: (permissions: any[]) => void;
}

const InviteForm: React.FC<InviteFormProps> = ({
  permissions,
  setPermissions,
}) => {
  const [form, setForm] = useState({
    email: '',
    username: '',
    branch: 'branch admin',
    mobile: '',
    permission: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await emailjs.sendForm(
      'service_3miwvgq',
      'template_iqxp25s',
      e.target as HTMLFormElement,
      '8LpDojmKWWNq8LUNo'
    );
    setForm({
      email: '',
      username: '',
      branch: 'branch admin',
      mobile: '',
      permission: '',
    });
    alert(`Invitation sent to ${form.email}`);
    setPermissions([...permissions, form]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Email:</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Username:</label>
        <input
          type="text"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Mobile Number:</label>
        <input
          type="text"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          required
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Permission Type:</label>
        <select
          value={form.permission}
          onChange={(e) => setForm({ ...form, permission: e.target.value })}
          className="border p-2 w-full"
        >
          <option value="branch admin">Branch Admin</option>
          <option value="super admin">Super Admin</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2">
        Send Invitation
      </button>
    </form>
  );
};

export default InviteForm;
