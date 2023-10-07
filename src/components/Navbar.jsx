import React from 'react';

// const socialLinks = [
//   { href: 'https://twitter.com/iori73wsy', src: 'icons/x-twitter.svg', label: 'Twitter' },
//   { href: 'https://www.instagram.com/ioriiii_13/', src: 'icons/instagram.svg', label: 'Instagram' },
//   { href: 'https://www.linkedin.com/in/iori-kawano-131a4122a/', src: 'icons/linkedin.svg', label: 'LinkedIn' },
//   { href: 'https://github.com/yoriss67', src: 'icons/github-orgnl.svg', label: 'Github' },
//   { href: 'https://note.com/yoriss_b0607', src: 'icons/note.svg', label: 'Note' },
// ];


const socialLinks = [
  { href: 'https://twitter.com/iori73wsy', src: 'icons/x-twitter.svg'},
  { href: 'https://www.instagram.com/ioriiii_13/', src: 'icons/instagram.svg' },
  { href: 'https://www.linkedin.com/in/iori-kawano-131a4122a/', src: 'icons/linkedin.svg' },
  { href: 'https://github.com/yoriss67', src: 'icons/github-orgnl.svg'},
  { href: 'https://note.com/yoriss_b0607', src: 'icons/note.svg'},
  { href: 'https://student.redesigner.jp/students/afd0d567a69657ea22e57f9faf589f10', src: 'icons/ReDesigner.svg'}
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <img style={{ visibility: "hidden"}} className="navbar-brand" src="sun2.png" alt="logo" />
      <ul className="navbar-nav">
        {socialLinks.map((link, index) => (
          <li className="nav-item position-relative" key={index} >
            <a
              className={`nav-link`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <img src={link.src} alt={link.label} className="social-icon" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

