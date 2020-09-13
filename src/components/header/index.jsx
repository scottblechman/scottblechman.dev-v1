import React from 'react';
import { HoverUnderline, Container, Underlined } from '../global/body/styles';
import { Navbar, VerticalCenter, NavbarLinks, SvgImage, Description } from './styles';
import image from '../../assets/svg/header.svg';

export default function Header() {
    return (
        <>
        <Navbar>
            <VerticalCenter><a href="#">Scott Blechman</a></VerticalCenter>
            <NavbarLinks>
                <VerticalCenter><HoverUnderline><a href="#">Experience</a></HoverUnderline></VerticalCenter>
                <VerticalCenter><HoverUnderline><a href="#">Projects</a></HoverUnderline></VerticalCenter>
                <VerticalCenter><HoverUnderline><a href="#">Contact</a></HoverUnderline></VerticalCenter>
            </NavbarLinks>
        </Navbar>
        <Container id="About">
            <Description>
                <h1>Hi, I'm Scott!</h1>
                <h3>I'm a fullstack engineer based in <Underlined><a href="https://www.google.com/maps/dir/Current+Location/Dallas,Texas">Dallas, Texas.</a></Underlined></h3>
                <p>I like building intuitively-designed applications, and exploring new ways of adding technology to everyday life.</p>
            </Description>
            <SvgImage src={image} alt="Mobile application"/>
        </Container>
        </>
    );
}