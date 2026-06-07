import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h3`
  color: #0a3cff;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #f2f4ff;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 8px;
`;

const History = () => {
  return (
    <Card>
      <Title>Activity History</Title>
      <List>
        <ListItem>Logged in - Today</ListItem>
        <ListItem>Updated profile - Yesterday</ListItem>
        <ListItem>Viewed dashboard - 2 days ago</ListItem>
      </List>
    </Card>
  );
};

export default History;
