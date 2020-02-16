import React from "react";

let now = new Date();
let year = now.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
}

export default Footer;
