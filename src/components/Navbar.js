import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  return (
    <nav>
      <Link to="/"><FontAwesomeIcon icon={faHouse} />Home</Link>
      <Link to="/createpost"><FontAwesomeIcon icon={faFile} />Post Article</Link>
      <Link to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} />Login</Link>
    </nav>
  )
}


export default Navbar
