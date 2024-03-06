import './style.css';
import gsap from 'gsap';

gsap.from(".clip-top, .clip-bottom", {
  duration: 2,
  delay: 1,
  height: "50vh",
  ease: "power4.inOut"
});

gsap.to(".marquee", {
  duration: 3.5,
  delay: 0.75,
  top: "50%",
  ease: "power4.inOut"
});

gsap.to([".clip-top .marquee", ".clip-bottom .marquee"], {
  duration: 5,
  delay: 1,
  left: "100%",
  ease: "power3.inOut"
});

gsap.to(".clip-center .marquee", {
  duration: 5,
  delay: 1,
  left: "-10%",
  ease: "power3.inOut"
});

gsap.to(".clip-top", {
  duration: 2,
  delay: 6,
  clipPath: "inset(0 0 100% 0)",
  ease: "power4.inOut"
});

gsap.to(".clip-bottom", {
  duration: 2,
  delay: 6,
  clipPath: "inset(100% 0 0 0)",
  ease: "power4.inOut"
});

gsap.to([".clip-top .marquee", ".clip-bottom .marquee", ".clip-center .marquee span"], {
  duration: 1,
  delay: 6,
  opacity: 0,
  ease: "power4.inOut"
});
