import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarDataL } from "./SideBarDataL";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justfy-content: flex-start;
  align-items: center;
`;

const NavIcons = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SideBarNav = styled.nav`
  background: #15171c;
  width: 15vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sideBar }) => (sideBar ? "0" : "-100%")};
  left: ${({ sideBar }) => (sideBar ? "0" : "-100%")};
`;

const SideBarWrap = styled.div`
  width: 100%;
`;

const SideBarLeft = () => {
  const [sideBar, setSideBarLeft] = useState(true);

  const showSideBarLeft = () => setSideBarLeft(!sideBar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcons to="#">
            <FaIcons.FaBars onClick={showSideBarLeft} />
          </NavIcons>
        </Nav>
        <SideBarNav sideBar={sideBar}>
          <SideBarWrap>
            <NavIcons to="#">
              <AiIcons.AiOutlineClose onClick={showSideBarLeft} />
            </NavIcons>
            {SideBarDataL.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SideBarWrap>
        </SideBarNav>
      </IconContext.Provider>
    </>
  );
};

export default SideBarLeft;
