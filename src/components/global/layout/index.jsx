import React from 'react';
import { Global } from './styles';

export default function Layout({ children}) {
    return (
      <>
        <Global/>
        {children}
      </>
    );
}