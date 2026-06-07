import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const Button = styled.button`
  padding: 10px 15px;
  background: #0a3cff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #082fcc;
  }
`;

const SaveBusinessPlan = ({ plan, businessName }) => {
  const savePlan = async () => {
    if (!plan) {
      Swal.fire("Error", "No plan to save", "error");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      Swal.fire("Error", "User not logged in", "error");
      return;
    }

    try {
      await setDoc(doc(db, "businessPlans", user.uid), {
        businessName: businessName || "My Business Plan",
        plan,
        createdAt: serverTimestamp(),
        uid: user.uid,
      });

      Swal.fire("Saved!", "Business plan saved successfully", "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return <Button onClick={savePlan}>Save Business Plan</Button>;
};

export default SaveBusinessPlan;
