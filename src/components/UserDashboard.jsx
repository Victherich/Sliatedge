import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Profile from "./Profile";
import Swal from 'sweetalert2'
import BusinessInfo from "./BusinessInfo";
import SavedBusinessPlans from "./SavedBusinessPlans";

// ========== STYLED COMPONENTS ==========

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f2f4ff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopBar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0a3cff;
    color: white;
    padding: 1rem;
  }
`;

const Hamburger = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const Sidebar = styled.div`
  width: 260px;
  background: #0a3cff;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    z-index: 1000;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const SidebarButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  font-weight: bold;

  &:hover {
    background: #d4af37;
    color: black;
  }
`;

const LogoutButton = styled.button`
  margin-top: auto;
  background: #d4af37;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: white;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 0.5rem;
  overflow-y:scroll;
`;

const Header = styled.h2`
  color: #0a3cff;
  margin-bottom: 1rem;
`;

// ========== DASHBOARD COMPONENT ==========

const UserDashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🔐 AUTH CHECK — redirect if not logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

 const handleLogout = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out of your account.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0a3cff",
    cancelButtonColor: "#d4af37",
    confirmButtonText: "Yes, logout",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    await signOut(auth);
    navigate("/login");
  }
};


  const renderPage = () => {
    switch (activePage) {
      case "profile":
        return <Profile />;
        case "generatebusinessplan":
        return <BusinessInfo />;
      case "history":
        return <SavedBusinessPlans />;
      default:
        return <Profile />;
    }
  };

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  }

  return (
    <>
      <TopBar>
        <Hamburger onClick={() => setMenuOpen(true)}>☰</Hamburger>
        <h3>User Dashboard</h3>
      </TopBar>

      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />

      <DashboardContainer>
        <Sidebar open={menuOpen}>
          <h3>User Menu</h3>

          <SidebarButton
            onClick={() => {
              setActivePage("profile");
              setMenuOpen(false);
            }}
          >
            Profile
          </SidebarButton>

          <SidebarButton
            onClick={() => {
              setActivePage("generatebusinessplan");
              setMenuOpen(false);
            }}
          >
            Genarate Business Plan
          </SidebarButton>

          <SidebarButton
            onClick={() => {
              setActivePage("history");
              setMenuOpen(false);
            }}
          >
            My Business Plans
          </SidebarButton>



          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </Sidebar>

        <ContentArea>
          <Header>User Dashboard</Header>
          {renderPage()}
        </ContentArea>
      </DashboardContainer>
    </>
  );
};

export default UserDashboard;
