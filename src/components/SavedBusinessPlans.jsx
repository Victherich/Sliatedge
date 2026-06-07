import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";

import BusinessPlanModal2 from "./BusinessPlanModal2";

const Container = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #0a3cff;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const BusinessName = styled.h3`
  margin: 0;
  color: #0a3cff;
`;

const ViewButton = styled.button`
  background: #d4af37;
  color: black;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #c29f2b;
  }
`;

const SavedBusinessPlans = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchPlans = async () => {
    try {
      const q = query(
        collection(db, "businessPlans"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const userPlans = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(plan => plan.uid === auth.currentUser?.uid);

      setPlans(userPlans);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleView = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <Container>
      <Title>Saved Business Plans</Title>

      {plans.length === 0 && <p>No business plans saved yet.</p>}

      {plans.map(plan => (
        <Card key={plan.id}>
          <BusinessName>{plan.businessName}</BusinessName>
          <ViewButton onClick={() => handleView(plan)}>View</ViewButton>
        </Card>
      ))}

      {modalOpen && selectedPlan && (
        <BusinessPlanModal2
          plan={selectedPlan.plan}
          form={{ businessName: selectedPlan.businessName }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </Container>
  );
};

export default SavedBusinessPlans;
