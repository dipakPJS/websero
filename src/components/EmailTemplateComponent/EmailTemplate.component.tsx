"use client"
import * as React from "react";

interface EmailTemplateProps {
  userName: string;
  email: string;
  projectType: string;
  projectBudget: string;
}

export const EmailTemplateComponent: React.FC<EmailTemplateProps> = ({
  userName,
  email,
  projectType,
  projectBudget,
}) => {
  return (
    <div
      className="email-template-component"
      style={{
        textAlign: "left",
        padding: "20px",
        backgroundColor: "black",
        borderRadius: "50px",
        border: "10px groove blue",
        fontFamily: "Roboto, sans-serif",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          padding: "20px",
          fontFamily: "Poppins, sans-serif",
          color: "white",
        }}
      >
        You just received a new email from websero agency website!
      </h1>
      <div
        style={{
          fontSize: "25px",
          color: "white",
          fontFamily: "Montserrat, sans-serif"
          ,
        }}
      >
        <p>
          User Name: <span style={{ color: "#fff200" }}>{userName}</span>
        </p>
        <p>
          Email: <span style={{ color: "#fff200" }}>{email}</span>
        </p>
        <p>
          Project Type: <span style={{ color: "#fff200" }}>{projectType}</span>
        </p>
        <p>
          Project Budget:{" "}
          <span style={{ color: "#fff200" }}>{projectBudget}</span>
        </p>
      </div>
    </div>
  );
};
