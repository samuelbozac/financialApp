import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

interface BaseLayout {
  children: JSX.Element | string;
}

export const BaseLayout: React.FC<BaseLayout> = ({ children }): JSX.Element => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};