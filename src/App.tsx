import React from 'react';
import './App.css';
import Header from 'components/Header';

export default ({ children } : any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
