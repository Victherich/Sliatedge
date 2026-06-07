import React from "react";
import styled from "styled-components";
import SaveBusinessPlan from "./SaveBusinessPlan";
import DownloadPlanPDF from "./DownloadPlanPDF";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background: #ffffff;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 12px;
  padding: 20px 25px;
  position: relative;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
`;

const Title = styled.h3`
  color: #0a3cff;
  margin-bottom: 15px;
`;

const Content = styled.pre`
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.6;
  background: #f2f4ff;
  padding: 15px;
  border-radius: 8px;
  max-height: 60vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #d4af37;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: bold;
  cursor: pointer;
  color: black;

  &:hover {
    background: #c29f2b;
  }
`;

const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const BusinessPlanModal = ({ plan, form, onClose }) => {
  if (!plan) return null;

  return (
    <Overlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <Title>Generated Business Plan</Title>
        <Content>{plan}</Content>

        <Actions>
          <SaveBusinessPlan plan={plan} businessName={form.businessName} />
          <DownloadPlanPDF plan={plan} businessName={form.businessName} />
        </Actions>
      </ModalWrapper>
    </Overlay>
  );
};

export default BusinessPlanModal;
