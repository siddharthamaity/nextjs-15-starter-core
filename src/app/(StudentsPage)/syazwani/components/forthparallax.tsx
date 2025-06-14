import style from "@/app/(StudentsPage)/syazwani/components/forth.module.css"
// import { RadialBarChart } from "recharts"
import MyBarChart from "@/components/barchart"
import PieChart from '@/components/PieChart';
import HorizontalBarChart from '@/components/HorizontalBarChart';
import DoughnutChart from "@/components/Doughnut"
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export function ForthParallax(){
    const parallaxRef = useRef(null);
    const card1 = useRef(null);
    const [showChart1, setShowChart1] = useState(false);
    const [showPieChart1, setShowPieChart1] = useState(false);
    const [showDoughnut, setshowDoughnut] = useState(false);
    const [background, setBackground] = useState(20);

    useLayoutEffect(()=>{
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
              onEnter: () => {
                setShowChart1(true);
                setShowPieChart1(true);
                setshowDoughnut(true);
              },
              onUpdate: (self) =>{
                  setBackground(Math.ceil(self.progress * 100 + 20))
              },
            }
          });
          tl.to(card1.current, {opacity: 1 }, 0)
          ScrollTrigger.refresh();
        });

    return () => ctx.revert();
    }, []);
    
    return(
        <>
            <section className={style.pageContainer} ref={parallaxRef} style={{background: `linear-gradient(180deg,rgba(61, 126, 170, 1) ${background}%,rgba(140, 160, 150, 1) ${background + 10}%,rgba(255, 228, 122, 1) ${background + 30}%)`}}>
                <h1>Key Findings</h1>
                <div className={style.cardparent}>
                    <div className={style.card} ref={card1}>
                        <h1>Staff Performance</h1>
                        <p>Staff Performance, cleanliness and crowd control are the top drivers of tourist satisfction</p>
                        <div className={style.chartdiv} ref={card1}>
                            <HorizontalBarChart shouldRender={showChart1}/>
                        </div>
                        
                        
                    </div>
                    <div className={style.card}>
                        <h1>Safety</h1>
                        <p>Visitors rated safety measures and infrastructure maintenance as important, but found inconsistencies in quality. </p>        
                        <div className={style.piechart}>
                            <PieChart shouldRender={showPieChart1}/>
                        </div>

                    </div>
                    <div className={style.card}>
                        <h1>Visitor Service</h1>
                        <p>Efficient visitor services and informational access (e.g. signboards, digital kiosks) improved the overall experience.</p>
                        <div className={style.piechart}>
                            <DoughnutChart shouldRender={showDoughnut}/>
                        </div>
                    </div>
                </div>
                {/* <Quiz /> */}

            </section>
            <div style={{ height: "50vh" }}></div>
        </>
    )
}