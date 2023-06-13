import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      {/* <a className="navbar-brand" href="#"></a> */}

      <div className="navbar-emp"></div>
      {/* ml-auto mb-2 mb-lg-0 */}
      <ul className="navbar-ul ">
        <li className="nav-item">
          <a
            className="nav-link js-turn-to-red"
            aria-current="page"
            href="https://twitter.com/iori73wsy"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link js-turn-to-red"
            href="https://www.instagram.com/ioriiii_13/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link js-turn-to-red"
            href="https://www.linkedin.com/in/iori-kawano-131a4122a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link js-turn-to-red" href="https://github.com/yoriss67" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link js-turn-to-red" href="https://note.com/yoriss_b0607" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faNoteSticky} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
