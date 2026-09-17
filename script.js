gsap.registerPlugin(ScrollTrigger);

const loader = document.querySelector(".loader");
const intro = gsap.timeline({defaults:{ease:"power4.out"}});
intro.to(loader,{yPercent:-100,duration:1.1,delay:.55})
.from(".nav",{y:-25,opacity:0,duration:.7},"-=.5")
.from(".hero .kicker",{y:25,opacity:0,duration:.6},"-=.35")
.from(".hero h1 span",{y:80,opacity:0,duration:1},"-=.3")
.from(".hero h1 em",{y:50,opacity:0,duration:.8},"-=.55")
.from(".hero-video",{clipPath:"inset(0 100% 0 0)",duration:1.25},"-=.55")
.from(".hero-desc",{y:25,opacity:0,duration:.6},"-=.55")
.from(".hero-actions",{y:20,opacity:0,duration:.6},"-=.4")
.from(".hero-side span",{x:25,opacity:0,stagger:.08,duration:.4},"-=.5");

gsap.to(".hero-bg",{yPercent:12,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
gsap.to(".hero-video video",{scale:1.12,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1.2}});

gsap.from(".about-photo",{clipPath:"inset(0 0 100% 0)",duration:1.2,ease:"power4.inOut",scrollTrigger:{trigger:".about",start:"top 75%"}});
gsap.from(".about-copy > *",{y:45,opacity:0,stagger:.12,duration:.8,scrollTrigger:{trigger:".about-copy",start:"top 72%"}});

gsap.to(".manifesto-bg",{yPercent:15,ease:"none",scrollTrigger:{trigger:".manifesto",start:"top bottom",end:"bottom top",scrub:1.5}});
gsap.from(".manifesto-inner > *",{y:60,opacity:0,stagger:.12,duration:.9,scrollTrigger:{trigger:".manifesto",start:"top 70%"}});

gsap.from(".section-head > *",{y:60,opacity:0,stagger:.15,duration:.9,scrollTrigger:{trigger:".services",start:"top 72%"}});
gsap.from(".service-card",{y:90,opacity:0,scale:.96,stagger:.16,duration:1,ease:"power3.out",scrollTrigger:{trigger:".service-grid",start:"top 78%"}});

gsap.from(".gallery-head > *",{y:55,opacity:0,stagger:.15,duration:.8,scrollTrigger:{trigger:".gallery",start:"top 75%"}});
gsap.from(".gallery-main",{clipPath:"inset(0 100% 0 0)",duration:1.3,scrollTrigger:{trigger:".gallery-stage",start:"top 75%"}});
gsap.from(".gallery-side .mini",{y:70,opacity:0,stagger:.15,duration:.9,scrollTrigger:{trigger:".gallery-side",start:"top 80%"}});

gsap.from(".quote blockquote",{y:80,opacity:0,duration:1,scrollTrigger:{trigger:".quote",start:"top 75%"}});
gsap.from(".contact > *:not(.contact-glow)",{y:55,opacity:0,stagger:.1,duration:.8,scrollTrigger:{trigger:".contact",start:"top 72%"}});

// Gentle floating motion for the glass quote.
gsap.to(".glass-line",{y:-6,duration:2.2,repeat:-1,yoyo:true,ease:"sine.inOut"});
