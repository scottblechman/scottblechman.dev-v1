import React from 'react';
import { HoverUnderline } from '../global/body/styles';
import { Navbar, VerticalCenter, NavbarLinks } from './styles';

export default function Header() {
    return (
        <Navbar>
            <VerticalCenter><a href="#">Scott Blechman</a></VerticalCenter>
            <NavbarLinks>
                <VerticalCenter><HoverUnderline><a href="#">About</a></HoverUnderline></VerticalCenter>
                <VerticalCenter><HoverUnderline><a href="#">Projects</a></HoverUnderline></VerticalCenter>
                <VerticalCenter><HoverUnderline><a href="#">Contact</a></HoverUnderline></VerticalCenter>
            </NavbarLinks>
        </Navbar>
    );
}