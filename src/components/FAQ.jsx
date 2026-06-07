import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0;
  background: #f7f9fc;
`;

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 24px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 50px;
  color:#0a3cff;
`;

const Item = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e5ecf6;
  margin-bottom: 16px;
`;

const Q = styled.h4`
  font-size: 18px;
  margin-bottom: 8px;
  color:#d4af37;
`;

const A = styled.p`
  color: #42526e;
`;

export default function FAQ() {
  return (
    <Section>
      <Container>
        <Title>Frequently Asked Questions</Title>

        <Item>
          <Q>What do I receive after generation?</Q>
          <A>
           A complete, organized business plan built with embedded logic and strategy.
          </A>
        </Item>

        <Item>
          <Q>Is it suitable for startups only?</Q>
          <A>No. It works for startups, scaling businesses, and internal strategy planning.</A>
        </Item>

        <Item>
          <Q>Is the data realistic?</Q>
          <A>
            Yes. The platform is designed to reflect real-world market conditions.
          </A>
        </Item>
      </Container>
    </Section>
  );
}
