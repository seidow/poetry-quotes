import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p className="focus:outline-none focus:shadow-outline">Copyright ⓒ {year} <strong> Saed </strong> </p>
      </footer>
    );
  }
  
  export default Footer;