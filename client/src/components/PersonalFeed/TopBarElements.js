import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #15171c;
    height: 80px;
    display: flex;
    justfy-content: space-between;
    padding: 0.5rem calc((100vw - 100px) /2);
    z-index: 10;
    position: fixed;
`

export const NavLink = styled(Link)`
    color: #fff;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    text-decoration: none;
    align-items: center;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    margin-left: 20px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`


const TopBarElements = () => {
  return (
    <div>TopBarElements</div>
  )
}

export default TopBarElements