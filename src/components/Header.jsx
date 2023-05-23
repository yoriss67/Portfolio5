{/* <header>
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        {' '}
      </a>

      <div className="" id="navbarText">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link js-turn-to-red"
              aria-current="page"
              href="https://twitter.com/iori73wsy"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link js-turn-to-red"
              href="https://www.instagram.com/ioriiii_13/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link js-turn-to-red"
              href="https://www.linkedin.com/in/iori-kawano-131a4122a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link js-turn-to-red"
              href="https://github.com/yoriss67"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link js-turn-to-red"
              href="https://note.com/yoriss_b0607"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-note-sticky"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>; */}


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

 export default function Header() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>

                <div className="" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                            <a
                                className="nav-link js-turn-to-red"
                                href="https://github.com/yoriss67"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link js-turn-to-red"
                                href="https://note.com/yoriss_b0607"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faNoteSticky} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}