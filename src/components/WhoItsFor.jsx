import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 0 24px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 40px;
  color:#0a3cff;
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.li`
  background: #f7f9fc;
  padding: 24px;
  border-radius: 14px;
  border-left: 6px solid #0a3cff;
  font-weight: 600;
`;

export default function WhoItsFor() {
  return (
    <Section>
      <Container>
        <Title>Who SLIATEDGE Is For</Title>
        <List>
          <Item>Startup founders & entrepreneurs</Item>
          <Item>Consultants & business strategists</Item>
          <Item>SMEs & growing businesses</Item>
          <Item>Agencies creating client business plans</Item>
        </List>
      </Container>
    </Section>
  );
}
