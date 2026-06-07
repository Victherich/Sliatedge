import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* ================= STYLES ================= */
const HeroSection = styled.section`
  padding: 100px 0 80px;
  background: linear-gradient(135deg, #eaf0ff 0%, #ffffff 60%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Badge = styled.span`
  display: inline-block;
  background: rgba(10, 60, 255, 0.1);
  color: #0a3cff;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const HeroTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #081f4d;

  span {
    color: #0a3cff;
  }

  @media (max-width: 900px) {
    font-size: 38px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #42526e;
  margin-bottom: 32px;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled.button`
  background: #0a3cff;
  color: #ffffff;
  border: none;
  padding: 14px 26px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(10, 60, 255, 0.25);
  }
`;

// const SecondaryButton = styled.button`
//   background: transparent;
//   color: #081f4d;
//   border: 2px solid #d4af37;
//   padding: 14px 26px;
//   border-radius: 10px;
//   font-size: 16px;
//   font-weight: 700;
//   cursor: pointer;

//   &:hover {
//     background: #d4af37;
//   }
// `;

const HeroImage = styled.div`
  width: 100%;
  height: 420px;
  background: linear-gradient(135deg, #0a3cff, #081f4d);
  border-radius: 20px;
  box-shadow: 0 30px 60px rgba(10, 60, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 900px) {
    height: 320px;
  }
`;

/* ================= COMPONENT ================= */
const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroSection>
      <Container>
        <HeroGrid>
          <div>
            <Badge>AI-Powered Business Planning</Badge>
            <HeroTitle>
              Build <span>Real-World</span> Business Plans in Minutes
            </HeroTitle>
            <HeroSubtitle>
              SLIATEDGE transforms your business idea into a complete, realistic,
              investor-ready business plan — tailored to your industry, market,
              and location.
            </HeroSubtitle>
            <HeroActions>
              <PrimaryButton onClick={()=>navigate('/login')}>Get Started</PrimaryButton>
              {/* <SecondaryButton>View Sample Plan</SecondaryButton> */}
            </HeroActions>
          </div>

          <HeroImage>Business Plan Preview</HeroImage>
        </HeroGrid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
