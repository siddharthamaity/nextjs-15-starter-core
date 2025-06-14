import style from "./quizsection.module.css"
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Quizsection(){
  const parallaxRef = useRef(null);

    useLayoutEffect(()=>{
        const ctx = gsap.context(() => {
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
    });

  return(
    <>
      <section className={style.pageContainer}>
        <div className={style.titlediv}>
          <h1>Let&apos;s Test your knowledge🧠</h1>
        </div>
        <div className={style.linkdiv}>
          <a href="syazwani/quiz">
            <button>
              IM READY
            </button>
          </a>
        </div>
        <p>
          Designed & Developed by <strong><a className={style.link} href="https://hrthprtflio.vercel.app/">Harith Hadi</a></strong><br />
        </p>
        

      </section>
    </>
  )
}