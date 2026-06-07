import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/* ================= STYLES ================= */

const HeaderWrapper = styled.header`
  padding: 16px 0;
  background: #ffffff;
  border-bottom: 1px solid #e5ecf6;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: #0a3cff;
  cursor: pointer;

  span {
    color: #d4af37;
  }
`;

/* Desktop Nav */
const NavDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.button`
  background: transparent;
  border: 2px solid #0a3cff;
  color: #0a3cff;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0a3cff;
    color: #ffffff;
  }
`;

/* Welcome User */
const WelcomeUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #0a3cff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

/* Mobile Hamburger */
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 28px;
    height: 3px;
    background: #0a3cff;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

/* Mobile Menu */
const MobileMenu = styled.div`
  position: absolute;
  top: 64px;
  right: 0;
  width: 100%;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: ${({ open }) => (open ? "block" : "none")};
  padding: 20px;
  text-align: center;

  button, div {
    width: 100%;
    margin-bottom: 10px;
  }
`;

/* ================= COMPONENT ================= */

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [auth]);

  const userName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "User";

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          {/* LOGO (always visible) */}
          <Logo onClick={() => navigate("/")}>
            SLIAT<span>EDGE</span>
          </Logo>

          {/* DESKTOP MENU */}
          <NavDesktop>
            {user ? (
              <WelcomeUser onClick={() => navigate("/userdashboard")}>
                👤 Welcome, {userName}
              </WelcomeUser>
            ) : (
              <>
                <NavButton onClick={() => navigate("/signup")}>
                  Sign Up
                </NavButton>
                <NavButton onClick={() => navigate("/login")}>
                  Login
                </NavButton>
              </>
            )}
          </NavDesktop>

          {/* HAMBURGER (MOBILE) */}
          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </HeaderContent>

        {/* MOBILE MENU */}
        <MobileMenu open={menuOpen}>
          {user ? (
            <WelcomeUser onClick={() => { 
              navigate("/userdashboard"); 
              setMenuOpen(false);
            }}>
              👤 Welcome, {userName}
            </WelcomeUser>
          ) : (
            <>
              <NavButton onClick={() => { 
                navigate("/signup"); 
                setMenuOpen(false);
              }}>
                Sign Up
              </NavButton>

              <NavButton onClick={() => { 
                navigate("/login"); 
                setMenuOpen(false);
              }}>
                Login
              </NavButton>
            </>
          )}
        </MobileMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
