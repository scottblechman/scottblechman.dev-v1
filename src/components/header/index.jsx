import React from 'react';
import { Navbar, VerticalCenter} from './styles';

export default function Header() {
    return (
        <Navbar>
            <VerticalCenter><a href="#">Scott Blechman</a></VerticalCenter>
            <VerticalCenter><a href="#">About</a></VerticalCenter>
            <VerticalCenter><a href="#">Projects</a></VerticalCenter>
            <VerticalCenter><a href="#">Contact</a></VerticalCenter>
        </Navbar>
    );
}