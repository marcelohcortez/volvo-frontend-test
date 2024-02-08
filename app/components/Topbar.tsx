import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/volvo-logo.png";

const Topbar = () => {
  return (
    <header className="topbarHeader">
      <Link href="/" className="topbarLogo">
        <Image src={logo} alt="Volvo logo" className="topbarLogoImage" />
      </Link>
    </header>
  );
};

export default Topbar;
