import React from 'react';

import { CartComponent } from './cart';

const AppProvider: React.FC = ({ children }) => {
  return <CartComponent>{children}</CartComponent>;
};

export default AppProvider;
