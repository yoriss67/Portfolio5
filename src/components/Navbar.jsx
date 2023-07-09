import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {



  return (
    <nav className="navbar navbar-expand-lg ">

      <img className="navbar-brand" src="sun.png" alt="logo" />
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link "
            aria-current="page"
            href="https://twitter.com/iori73wsy"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li> 

        <li className="nav-item">
          <a className="nav-link" href="https://www.instagram.com/ioriiii_13/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/iori-kawano-131a4122a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="https://github.com/yoriss67" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://note.com/yoriss_b0607" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faNoteSticky} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
