import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="header">
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  );
};

export default Header;
