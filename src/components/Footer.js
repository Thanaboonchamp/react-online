import React from "react";

const Footer = () => {
    const Name = "Pakawat Noosaard"
  return (
    <>
      <footer className="container">
        <p>© {Name} 1998-{new Date().getFullYear()}</p>
      </footer>
    </>
  );
};
export default Footer;
