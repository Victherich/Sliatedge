import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #0a3cff, #081f4d);
  text-align: center;
  color: #ffffff;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const Button = styled.button`
  background: #d4af37;
  color: #081f4d;
  border: none;
  padding: 16px 34px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default function CTA() {
  const navigate = useNavigate()
  return (
    <Section>
      <Title>Build Your Business Plan Today</Title>
      <Text>
        Turn your idea into a structured, realistic, and execution-ready business
        plan in minutes.
      </Text>
      <Button onClick={()=>navigate('/userdashboard')}>Get Started</Button>
    </Section>
  );
}
