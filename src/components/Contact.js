import React from "react";

const Contact = () => {
  return (
    <div style={footerStyles}>
      <h3 style={{ display: "inline", marginRight: 10 }}>
        Made by Ajay DS, with react and fastAPI.
      </h3>
      <a
        target="_blank"
        style={linkStyles}
        href="https://github.com/default-303/potato-disease-predictor"
      >
        Source code
      </a>
      <a
        target="_blank"
        style={linkStyles}
        href="https://www.linkedin.com/in/ajay-ds-b9b019184/"
      >
        LinkedIn
      </a>
    </div>
  );
};

const footerStyles = {
  background: "#6D6D64",
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  padding: 10,
  marginBottom: 0,
};

const linkStyles = {
  textDecoration: "none",
  marginRight: 10,
};
export default Contact;
