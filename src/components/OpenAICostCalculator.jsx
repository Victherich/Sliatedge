import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #f2f4ff;
  padding: 20px;
  border-radius: 12px;
  max-width: 480px;
  margin: 20px auto;
`;

const Title = styled.h3`
  color: #0a3cff;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background: #0a3cff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #082fcc;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  padding: 10px;
  background: #d4af37;
  color: black;
  border-radius: 8px;
`;

const OpenAICostCalculator = () => {
  const [inputTokens, setInputTokens] = useState("");
  const [outputTokens, setOutputTokens] = useState("");
  const [totalCost, setTotalCost] = useState(null);

  // Example pricing: GPT-5 mini
  const PRICING = {
    input: 0.25, // $ per 1M tokens
    output: 2.0, // $ per 1M tokens
  };

  const calculateCost = () => {
    const input = parseInt(inputTokens) || 0;
    const output = parseInt(outputTokens) || 0;

    const cost =
      (input / 1_000_000) * PRICING.input + (output / 1_000_000) * PRICING.output;

    setTotalCost(cost.toFixed(6)); // show small decimals
  };

  return (
    <Container>
      <Title>OpenAI Cost Calculator</Title>

      <Label>Input Tokens:</Label>
      <Input
        type="number"
        value={inputTokens}
        onChange={(e) => setInputTokens(e.target.value)}
        placeholder="e.g., 500"
      />

      <Label>Output Tokens:</Label>
      <Input
        type="number"
        value={outputTokens}
        onChange={(e) => setOutputTokens(e.target.value)}
        placeholder="e.g., 1500"
      />

      <Button onClick={calculateCost}>Calculate Cost</Button>

      {totalCost !== null && (
        <Result>
          Estimated Cost: <strong>${totalCost}</strong>
        </Result>
      )}
    </Container>
  );
};

export default OpenAICostCalculator;
