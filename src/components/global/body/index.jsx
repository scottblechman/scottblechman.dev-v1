import React from 'react';
import { Global } from './styles';

export default function Body(props) {
    return (
      <>
        <Global/>
        {props.children}
      </>
    );
}