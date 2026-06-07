
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 60px;
  color: #0a3cff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 40px;
  border-radius: 16px;
  background: #f7f9fc;
  border: 1px solid #e5ecf6;
`;

const Step = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #0a3cff;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  color:#d4af37;
`;

const Text = styled.p`
  color: #42526e;
  line-height: 1.6;
`;

export default function HowItWorks() {
  return (
    <Section>
      <Container>
        <Title>How SLIATEDGE Works</Title>
        <Grid>
          <Card>
            <Step>STEP 1</Step>
            <CardTitle>Enter Business Details</CardTitle>
            <Text>
              Provide structured inputs about your business, industry, market,
              location, and goals.
            </Text>
          </Card>

          <Card>
            <Step>STEP 2</Step>
            <CardTitle>AI Market Analysis</CardTitle>
            <Text>
              SLIATEDGE applies real-world business logic, market constraints, and
              industry intelligence.
            </Text>
          </Card>

          <Card>
            <Step>STEP 3</Step>
            <CardTitle>Complete Business Plan</CardTitle>
            <Text>
              Receive a fully structured, realistic, and execution-ready
              business plan.
            </Text>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
