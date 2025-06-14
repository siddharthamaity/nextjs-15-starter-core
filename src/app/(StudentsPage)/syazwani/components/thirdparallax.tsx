"use client";
import { Map } from "@/components/ui/map";
import {useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { section } from "framer-motion/client";
import styles from "./syazwani.module.css";
import ReviewsCarousel from "./reviewcarousel";


export function Thirdparallax() {
    const [reviews, setReview] = useState<google.maps.places.PlaceReview[]>([]);
    const [loading, setLoading] = useState(true);
    const [background, setBackground] = useState(20);


    const parallaxRef = useRef(null);
    const textdiv = useRef(null);
    const revdiv = useRef(null);
    const mapdiv = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          gsap.registerPlugin(ScrollTrigger);
          
          const tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: "top top",
              end: "+=3000",
              scrub: 1,
              pin: true,
              pinSpacing: false,
              onUpdate: (self) =>{
                  setBackground(Math.ceil(self.progress * 100 + 20))
              },
            },
          });
    
          tl.to(textdiv.current, { opacity: 0 }, 0)
            .to(revdiv.current, {opacity : 1},0.25)
            .to(mapdiv.current, {opacity : 1},0.50)

          
            ScrollTrigger.refresh();
        });
    
        return () => ctx.revert();
      }, []);

    return (
      <>
        <section className={styles.pageContainer} ref={parallaxRef} style={{background : `linear-gradient(180deg,rgba(58, 74, 180, 1) ${background}%, rgba(253, 29, 29, 1) ${background +30}%, rgba(252, 176, 69, 1) ${background +50}%)`}}>
          
          <div className={styles.container}>
            <h1 >Customer Reviews</h1>

            <div className={styles.elementcontainer}>
              <div className={styles.reviewcard} ref={revdiv}>
                <ReviewsCarousel />
              </div>
              <div className={styles.mapcard} ref={mapdiv}>
                <Map/>
                <div className={styles.mctext}>
                  <a href="https://www.google.com/maps/place/Petronas+Twin+Towers/@3.1579277,101.7021469,2046m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31cc37d12d669c1f:0x9e3afdd17c8a9056!8m2!3d3.1574693!4d101.7115639!16zL20vMHN5bHo?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D"
                  >📍Kuala Lumpur, Federal Territory of Kuala Lumpur</a>
                </div>
                
              </div>
              
            </div>


          </div>
          
            
               
                
            
        </section>
        <div style={{ height: "250vh" }}></div>
      </>
    );
}
