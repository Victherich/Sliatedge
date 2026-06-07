import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin-top: 10px;
  font-size: 14px;
`;

const Title = styled.h3`
  color: #0a3cff;
`;

const EditBusinessPlan = ({ plan, setPlan }) => {
  return (
    <div>
      <Title>Edit Business Plan</Title>
      <TextArea
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
        placeholder="Edit your generated business plan here..."
      />
    </div>
  );
};

export default EditBusinessPlan;
