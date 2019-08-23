import React from 'react';

const Layout: React.FC = ({ children }) => (
  <>
    <div>{children}</div>
    {/* <CopyBlock id={Date.now()} /> */}
  </>
);

export default Layout;
