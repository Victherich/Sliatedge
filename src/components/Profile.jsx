import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";

// ===== STYLED COMPONENTS =====
const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h3`
  color: #0a3cff;
`;

const Text = styled.p`
  color: #333;
`;
// ===== END STYLED COMPONENTS =====

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUserData(userSnap.data());
          } else {
            console.log("No user document found in Firestore");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h3>Loading profile...</h3>;
  }

  if (!userData) {
    return (
      <Card>
        <Title>Your Profile</Title>
        <Text>No profile data found.</Text>
      </Card>
    );
  }

  return (
    <Card>
      <Title>Your Profile</Title>
      <Text><strong>Name:</strong> {userData.name || "Not provided"}</Text>
      <Text><strong>Email:</strong> {userData.email}</Text>
      <Text><strong>Phone:</strong> {userData.phone || "Not provided"}</Text>
      <Text><strong>User ID:</strong> {userData.uid}</Text>
    </Card>
  );
};

export default Profile;
