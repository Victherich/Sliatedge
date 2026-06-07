import React from "react";
import styled from "styled-components";

/* ================= STYLES ================= */
const FooterWrapper = styled.footer`
  background: #081f4d;
  color: #ffffff;
  padding: 80px 0 30px;

`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Brand = styled.div``;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;

  span {
    color: #d4af37;
  }
`;

const BrandText = styled.p`
  color: #c9d4f0;
  font-size: 15px;
  line-height: 1.6;
  max-width: 360px;
`;

const Column = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 18px;
  color: #ffffff;
`;

const FooterLink = styled.a`
  display: block;
  color: #c9d4f0;
  font-size: 15px;
  margin-bottom: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: #d4af37;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #c9d4f0;
  font-size: 14px;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #c9d4f0;
    text-decoration: none;

    &:hover {
      color: #d4af37;
    }
  }
`;

/* ================= COMPONENT ================= */
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          {/* Brand */}
          <Brand>
            <Logo>
              SLIAT<span>EDGE</span>
            </Logo>
            <BrandText>
              SLIATEDGE is an AI-powered business planning platform that transforms
              ideas into realistic, market-ready business plans — structured,
              strategic, and built for real-world execution.
            </BrandText>
          </Brand>

          {/* Product */}
          <Column>
            <ColumnTitle>Product</ColumnTitle>
            <FooterLink>How it Works</FooterLink>
            <FooterLink>Features</FooterLink>
            <FooterLink>Pricing</FooterLink>
            <FooterLink>Sample Plan</FooterLink>
          </Column>

          {/* Company */}
          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink>About</FooterLink>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact</FooterLink>
          </Column>

          {/* Resources */}
          <Column>
            <ColumnTitle>Resources</ColumnTitle>
            <FooterLink>Help Center</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
            <FooterLink>Security</FooterLink>
          </Column>
        </FooterGrid>

        <Divider />

        <BottomBar>
          <div>© {new Date().getFullYear()} SLIATEDGE. All rights reserved.</div>
          <LegalLinks>
            <p >Privacy</p>
            <p >Terms</p>
            <p >Cookies</p>
          </LegalLinks>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
