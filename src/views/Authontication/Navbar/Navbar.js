import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { MobileNavbar } from "../../../layouts/mobile/navbar/MobileNavbar";
import DesktopNavbar from "../../../layouts/desktop/navbar/DesktopNavbar";

const Navbar = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
