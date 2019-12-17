import React from 'react';
// 注释掉区块下载提示 
// import CopyBlock from '@/components/CopyBlock';

const Layout: React.FC = ({ children }) => (
  <>
    <div>{children}</div>
    {/* <CopyBlock id={Date.now()} /> */}
  </>
);

export default Layout;
