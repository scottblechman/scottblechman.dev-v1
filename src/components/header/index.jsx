import React from 'react';
import { HoverUnderline, Container, Underlined } from '../global/body/styles';
import { Navbar, VerticalCenter, NavbarLinks } from './styles';

export default function Header() {
    return (
        <>
        <Navbar>
            <VerticalCenter><a href="#">Scott Blechman</a></VerticalCenter>
            <NavbarLinks>
                <VerticalCenter><HoverUnderline><a href="#About">About</a></HoverUnderline></VerticalCenter>
                <VerticalCenter><HoverUnderline><a href="#">Projects</a></HoverUnderline></VerticalCenter>
                <VerticalCenter><HoverUnderline><a href="#">Contact</a></HoverUnderline></VerticalCenter>
            </NavbarLinks>
        </Navbar>
        <Container id="About">
            <h1>Hi, I'm Scott!</h1>
            <h3>I'm a fullstack engineer based in <Underlined><a href="https://www.google.com/maps/dir/Current+Location/Dallas,Texas">Dallas, Texas</a></Underlined>.</h3>
        </Container>
        </>
    );
}