import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { Nav, NavLink, Bars, NavBtn, NavBtnLink, NavMenu } from './TopBarElements';

/* const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justfy-content: flex-start;
    align-items: center;

`;

const NavIcons = styled(Link)`
    margin-left: 49vw;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`; */

const TopBar = () => {
  return (
    <>
        <Nav>
            <NavLink to='/'>
                Home
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/personal-feed' activeStyle>
                    Personal Feed
                </NavLink>
                {/* <NavLink to='/services' activeStyle>
                    Services
                </NavLink>
                <NavLink to='/contact-us' activeStyle>
                    Contact Us
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
            </NavBtn>
            {/* <NavIcons to="#">
                <AiIcons.AiFillHome  />
            </NavIcons> */}
        </Nav>
    </>
  )
}

export default TopBar