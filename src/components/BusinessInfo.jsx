import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
// import SaveBusinessPlan from "./SaveBusinessPlan";
// import EditBusinessPlan from "./EditBusinessPlan";
// import DownloadPlanPDF from "./DownloadPlanPDF";
// import BusinessPlanViewer from "./BusinessPlanModal";
import BusinessPlanModal from "./BusinessPlanModal";

// ===== STYLED COMPONENTS =====

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0a3cff 90%, #d4af37 10%);
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  text-align: center;
  color: #0a3cff;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-top: 12px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ddd;
  min-height: 120px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background: #0a3cff;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #082fcc;
  }
`;

// const OutputBox = styled.pre`
//   margin-top: 20px;
//   background: #f2f4ff;
//   padding: 15px;
//   border-radius: 10px;
//   white-space: pre-wrap;
//   font-size: 14px;
// `;

// ===== COMPONENT =====

const BusinessInfo = () => {
  const [form, setForm] = useState({
    businessName: "",
    businessType: "",
    location: "",
    targetAreas: "",
    briefDescription: "",
    targetCustomers: "",
    services: "",
  });

  const [plan, setPlan] = useState("");
  const [isModalOpen, setIsModalOpen]=useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   const generateBusinessPlan = async () => {
//     Swal.fire({
//       title: "Generating Business Plan...",
//       didOpen: () => Swal.showLoading(),
//     });

//     const prompt = `
// You are a professional business strategist. Create a complete, realistic, real-time business plan in EXACTLY this structure and include ALL sections.

// Business Name: ${form.businessName}
// Business Type: ${form.businessType}
// Location: ${form.location}
// Target Areas: ${form.targetAreas}
// Business Description: ${form.briefDescription}
// Target Customers: ${form.targetCustomers}
// Services: ${form.services}

// TEMPLATE TO FOLLOW STRICTLY:

// MARKET ANALYSIS:
// • Market type
// • Customer Need
// • Problem
// • Solution
// • Market Readiness
// • Scalability

// CURRENT SITUATION ANALYSIS:
// Write a detailed analysis based on ${form.location} and the nature of ${form.businessType}.

// COMPETITOR ANALYSIS:
// Analyze real competitors in ${form.location} for ${form.businessType}.

// SWOT ANALYSIS:
// Provide a full SWOT table.

// GOALS & OBJECTIVES:
// Overall Business Goal
// Short Term Goals (1st Quarter)
// Medium Term Goals (2nd Quarter)
// Long Term Goals (3rd & 4th Quarter)

// STRATEGIC GROWTH OBJECTIVES (Year 1)

// KEY PERFORMANCE INDICATORS (KPIs)

// TARGET AUDIENCE DEFINITION:
// Primary, Secondary, Tertiary, Psychographic, What We Are Not Targeting, How We Reach This Audience

// MESSAGING AND POSITIONING STRATEGY

// CHANNEL SELECTION:
// Google, WhatsApp, Facebook, Offline

// CONTENT STRATEGY PLAN:
// Content objectives, pillars, examples

// PLATFORM SPECIFIC STRATEGY

// PAID MEDIA STRATEGY:
// Google Search, Google Maps, Instagram/Facebook

// BUDGET ALLOCATION:
// Provide realistic percentages.

// MAKE IT SPECIFIC TO:
// Business: ${form.businessName}
// Location: ${form.location}
// Nature: ${form.businessType}
// `;

//     try {
//       const response = await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer 
//         },
//         body: JSON.stringify({
//           model: "gpt-4.1",
//           messages: [{ role: "user", content: prompt }],
//           temperature: 0.7
//         })
//       });

//       const data = await response.json();
//       const result = data.choices[0].message.content;
//       setPlan(result);

//       Swal.fire("Success", "Business Plan Generated!", "success");
//     } catch (error) {
//       Swal.fire("Error", "Failed to generate plan", "error");
//       console.error(error)
//     }
//   };







const generateBusinessPlan = async () => {
  Swal.fire({
    title: "Generating Business Plan...",
    didOpen: () => Swal.showLoading(),
  });

    const prompt = `
You are a professional business strategist. Create a complete, realistic, real-time business plan in EXACTLY this structure and include ALL sections.

Business Name: ${form.businessName}
Business Type: ${form.businessType}
Location: ${form.location}
Target Areas: ${form.targetAreas}
Business Description: ${form.briefDescription}
Target Customers: ${form.targetCustomers}
Services: ${form.services}

TEMPLATE TO FOLLOW STRICTLY:

MARKET ANALYSIS:
• Market type
• Customer Need
• Problem
• Solution
• Market Readiness
• Scalability

CURRENT SITUATION ANALYSIS:
Write a detailed analysis based on ${form.location} and the nature of ${form.businessType}.

COMPETITOR ANALYSIS:
Analyze real competitors in ${form.location} for ${form.businessType}.

SWOT ANALYSIS:
Provide a full SWOT table.

GOALS & OBJECTIVES:
Overall Business Goal
Short Term Goals (1st Quarter)
Medium Term Goals (2nd Quarter)
Long Term Goals (3rd & 4th Quarter)

STRATEGIC GROWTH OBJECTIVES (Year 1)

KEY PERFORMANCE INDICATORS (KPIs)

TARGET AUDIENCE DEFINITION:
Primary, Secondary, Tertiary, Psychographic, What We Are Not Targeting, How We Reach This Audience

MESSAGING AND POSITIONING STRATEGY

CHANNEL SELECTION:
Google, WhatsApp, Facebook, Offline

CONTENT STRATEGY PLAN:
Content objectives, pillars, examples

PLATFORM SPECIFIC STRATEGY

PAID MEDIA STRATEGY:
Google Search, Google Maps, Instagram/Facebook

BUDGET ALLOCATION:
Provide realistic percentages.

MAKE IT SPECIFIC TO:
Business: ${form.businessName}
Location: ${form.location}
Nature: ${form.businessType}
`;
  const makeRequest = async (retryCount = 0) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": ``
          },
          body: JSON.stringify({
            model: "gpt-4.1",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
          })
        }
      );

      const data = await response.json();

      // 🔴 Handle rate limit (429)
      if (response.status === 429) {
        if (retryCount < 2) {
          await new Promise(res => setTimeout(res, 3000)); // wait 3 seconds
          return makeRequest(retryCount + 1);
        } else {
          throw new Error("Too many requests. Please wait and try again.");
        }
      }

      // 🔴 Handle other API errors
      if (!response.ok) {
        throw new Error(data.error?.message || "OpenAI request failed");
      }

      // ✅ Safe access to response
      const result = data.choices?.[0]?.message?.content;

      if (!result) {
        throw new Error("No response received from OpenAI");
      }

 
      setPlan(result);
setIsModalOpen(true);
      Swal.fire("Success", "Business Plan Generated!", "success");

    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  makeRequest();
};






  return (
    <Container>
      <Card>
        <Title>Business Information</Title>

        <Label>Business Name</Label>
        <Input name="businessName" value={form.businessName} onChange={handleChange} />

        <Label>Business Type (e.g. Mobile Repair, Cafe, Agency, etc)</Label>
        <Input name="businessType" value={form.businessType} onChange={handleChange} />

        <Label>Primary Location</Label>
        <Input name="location" value={form.location} onChange={handleChange} />

        <Label>Target Areas (comma separated)</Label>
        <Input name="targetAreas" value={form.targetAreas} onChange={handleChange} />

        <Label>Brief Business Description</Label>
        <TextArea name="briefDescription" value={form.briefDescription} onChange={handleChange} />

        <Label>Target Customers</Label>
        <TextArea name="targetCustomers" value={form.targetCustomers} onChange={handleChange} />

        <Label>Services Offered</Label>
        <TextArea name="services" value={form.services} onChange={handleChange} />

        <Button onClick={generateBusinessPlan}>Generate Business Plan</Button>

    
     {plan && isModalOpen && (
  <BusinessPlanModal
    plan={plan}
    form={form}
    onClose={() => setIsModalOpen(false)}
  />
)}




      </Card>
    </Container>
  );
};

export default BusinessInfo;
