import style from "./quizsection.module.css"
import  Quiz  from "./quiz";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Quizsection(){
  const parallaxRef = useRef(null);

    useLayoutEffect(()=>{
        let ctx = gsap.context(() => {
          gsap.registerPlugin(ScrollTrigger);
          
          const tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: "top top",
              end: "+=5000",
              scrub: 1,
              pin: true,
              pinSpacing: false,
              
            },
          });
    })
    })
  return(
    <>
      <section className={style.pageContainer}>
        <Quiz/>
      </section>
    </>
  )
}