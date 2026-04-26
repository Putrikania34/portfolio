import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>
        <title>Your App Title</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;