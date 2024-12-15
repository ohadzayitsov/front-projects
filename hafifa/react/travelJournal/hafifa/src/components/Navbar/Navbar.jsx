import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import { Public} from '@mui/icons-material'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="nav-body">
      <div id="nav-title"> <Public sx={{marginRight:1}}/> my travel journal.</div>
    </div>
  );
};

export default Navbar;
