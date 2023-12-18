import React, { useState, useEffect } from "react";

// const socialLinks = [
//   { href: "https://twitter.com/iori73wsy", src: "icons/x-twitter.svg" },
//   { href: "https://www.instagram.com/ioriiii_13/", src: "icons/instagram.svg" },
//   {
//     href: "https://www.linkedin.com/in/iori-kawano-131a4122a/",
//     src: "icons/linkedin.svg",
//   },
//   { href: "https://github.com/yoriss67", src: "icons/github-orgnl.svg" },
//   { href: "https://note.com/yoriss_b0607", src: "icons/note.svg" },
//   {
//     href: "https://student.redesigner.jp/students/afd0d567a69657ea22e57f9faf589f10",
//     src: "icons/ReDesigner.svg",
//   },
// ];

const socialLinks = [
  { href: "https://twitter.com/iori73wsy", src: "icons/x-twitter.svg" },
  { href: "https://www.instagram.com/ioriiii_13/", src: "icons/instagram.svg" },
  {
    href: "https://www.linkedin.com/in/iori-kawano-131a4122a/",
    src: "icons/linkedin.svg",
  },
  { href: "https://github.com/yoriss67", src: "icons/github-orgnl.svg" },
  { href: "https://note.com/yoriss_b0607", src: "icons/note.svg" },
  {
    href: "https://student.redesigner.jp/students/afd0d567a69657ea22e57f9faf589f10",
    src: "icons/ReDesigner.svg",
  },
];

export default function Header() {
  const [stickySocial, setStickySocial] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const socialElement = document.querySelector(".social");
      if (socialElement) {
        // social要素の上部がビューポート上部に到達したかどうかを確認
        const socialTop = socialElement.getBoundingClientRect().top;

        if (socialTop * 7 < scrollY) {
          // sticky状態になる条件
          setStickySocial(true);
          console.log("sticky");
        } else {
          setStickySocial(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // spとpcで表示を変える
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // スタイルを動的に設定
  const headerStyle = {
    // isMobile ? 'sp' : 'pc' 今広がる仕様になっている
    scale: stickySocial ? "1" : "1",
    padding: stickySocial ? isMobile ? "1rem 0" : ".8rem 0" : isMobile ? "1.5rem 0" : "1.5rem 0",
  };

  const socialStyle = {
    gap: stickySocial ? isMobile ? "1.9rem" : "6rem" : isMobile ? "1.5rem" : "5rem",

  }
  return (

    <header className="header" style={headerStyle}>
      <div className="social" style={socialStyle}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            className={`social-icon`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <img src={link.src} alt={link.label} className="social-icon" />
          </a>
        ))}
      </div>
    </header>
  );
}
