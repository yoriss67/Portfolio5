import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gsap.css';

gsap.registerPlugin(ScrollTrigger);

// const section = ({ children, className = '' }) => (
//   <section className={className}>{children}</section>
// );

const Gsap = () => {
  const containerRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray('.container section');
    const texts = gsap.utils.toArray('.anim');
    const mask = maskRef.current;

    // all your JS code here, replacing document.querySelector with useRef
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          end: "+=3000",
          markers: true,
        }
      });
  
      //Progress bar animation
      gsap.to(mask, {
        width: "100%",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top left",
          scrub: 1
        }
      });
  
      // whizz around the sections
      sections.forEach((section) => {
        // grab the scoped text
        let text = section.querySelectorAll(".anim");
        
        // bump out if there's no items to animate
        if(text.length === 0)  return 
        
        // do a little stagger
        gsap.from(text, {
          y: -130,
          opacity: 0,
          duration: 2,
          ease: "elastic",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            markers: true
          }
        });
      });


  }, []);

  return (
    <div className="wrapper">
    <div className="container scrollx" ref={containerRef}>
      <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
        <mask id="mask0_0_1" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
          <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_0_1)">
          <rect className="mask" y="-49" height="99" fill="black"/>
        </g>
      </svg>
      <section className="sec1 pin">
        <span>Advanced</span>
        <h1>Signify Elegance</h1>
        <div className="col">
          <p>Lorem ipsum dolor sit amet consectetur.# The original message was cut off, so I'll use the original HTML provided for completion.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, fugit dolore. Impedit mollitia libero reprehenderit?</p>
          <h2 className="anim">Lorem Ipsum</h2>
          <p className="anim">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, fugit dolore. Impedit mollitia libero reprehenderit?</p>
        </div>
      </section>
      <section className="sec2 pin">
        <span>Advanced</span>
        <h1>Signify Elegance</h1>
        <div className="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, fugit dolore. Impedit mollitia libero reprehenderit?</p>
          <h2 className="anim">Lorem Ipsum</h2>
          <p className="anim">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, fugit dolore. Impedit mollitia libero reprehenderit?</p>
        </div>
      </section>
      <section className="sec3 pin">
        <span>Advanced</span>
        <h1>Signify Elegance</h1>
        <div className="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, fugit dolore. Impedit mollitia libero reprehenderit?</p>
          <h2 className="anim">Lorem Ipsum</h2>
          <p className="anim">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, fugit dolore. Impedit mollitia libero reprehenderit?</p>
        </div>
      </section>
    </div>
  </div>
  );
};

export default Gsap;
