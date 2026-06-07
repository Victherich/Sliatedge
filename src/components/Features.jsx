import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0;
  background: #f7f9fc;
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
  color:#0a3cff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #e5ecf6;
`;

const FeatureTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 12px;
  color:#d4af37;
`;

const Text = styled.p`
  color: #42526e;
`;

export default function Features() {
  return (
    <Section>
      <Container>
        <Title>Key Features</Title>
        <Grid>
          <Feature>
            <FeatureTitle>Industry-Specific Logic</FeatureTitle>
            <Text>No generic plans. Every output adapts to your industry.</Text>
          </Feature>
          <Feature>
            <FeatureTitle>Location-Based Analysis</FeatureTitle>
            <Text>Market insights tailored to real geographic conditions.</Text>
          </Feature>
          <Feature>
            <FeatureTitle>Investor-Ready Structure</FeatureTitle>
            <Text>Clean, professional format with no missing sections.</Text>
          </Feature>
          <Feature>
            <FeatureTitle>Editable Output</FeatureTitle>
            <Text>Modify and customize every section after generation.</Text>
          </Feature>
          <Feature>
            <FeatureTitle>PDF & DOCX Export</FeatureTitle>
            <Text>Export instantly for sharing or pitching.</Text>
          </Feature>
          <Feature>
            <FeatureTitle>Reality-Based AI</FeatureTitle>
            <Text>Built for execution, not AI hallucinations.</Text>
          </Feature>
        </Grid>
      </Container>
    </Section>
  );
}
