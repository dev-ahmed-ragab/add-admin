import React from 'react';
import Sidebar from './Sidebar';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
