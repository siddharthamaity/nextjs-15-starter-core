"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Secparallax() {

    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null);
    const city = useRef(null);
    const stars = useRef(null);
    const cloud1 = useRef(null);
    const cloud2 = useRef(null);
    const image = useRef(null);
    const title = useRef(null);
    const p1 = useRef(null);
    const d1 = useRef(null);
    const d2 = useRef(null);
    const d3 = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() =>{
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults : {duration : 1},
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "+=3000",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    
                },

            });
            tl.to(
                city.current,
                {
                    y: "+=100",
                },
                0
            );
            tl.to(
                stars.current,
                {
                    opacity: 0.75,
                },
                0
            );
            tl.to(
                image.current,
                {
                    y: "-=80",
                    opacity: 1,
                },
                0
            );
            tl.to(
                title.current,
                {
                    opacity: 1,
                    duration: 0.5
                },
                0.5
            );
            tl.to(
                p1.current,
                {
                    opacity: 1,
                    duration: 0.5
                },
                0.5
            );
            tl.to(
                d1.current,
                {
                    opacity: 1,
                    duration: 0.5,
                },
                0.55
            );
            tl.to(
                d2.current,
                {
                    opacity: 1,
                    duration: 0.5,
                },
                0.65
            );
            tl.to(
                d3.current,
                {
                    opacity: 1,
                    duration: 0.5,
                },
                0.75
            );
            tl.to(
                cloud1.current,
                {
                    x : "+=1000"
                },
                0
            );
            tl.to(
                cloud2.current,
                {
                    x : "-=1000"
                },
                0
            );
        })
    })


    return (
        <section className="parallax-outer">
            <div
                ref={parallaxRef}
                className="parallax"
                style={{
                    background:
                        "linear-gradient(180deg,rgba(0, 67, 198, 1) 0%, rgba(1, 22, 69, 1) 100%)",
                }}
            >
                <img ref={city} className="city" src="images/Parallax/City_Skyline2.png" alt="City Skyline 2" />
                <img ref={cloud1} className="cloud1" src="images/Parallax/cloud.png" alt="" />
                <img ref={cloud2} className="cloud2" src="images/Parallax/cloud.png" alt="" />
                <img ref={stars} className="stars" src="images/Parallax/stars.png" alt="City Skyline 2" />
                <div className="card-container">
                    <div className="description-card">
                        <h1 ref={title}>History of KLCC 🏙️</h1>
                        <div className="parent-cardies">
                            <div className="cardies1"><p>test</p></div>
                            <div className="cardies2" ref={p1}><p>The Petronas Twin Towers, located in the heart of Kuala Lumpur City Centre (KLCC), were officially completed in 1998 and symbolized Malaysia’s rapid development and modernization. Designed by Argentine architect César Pelli, the towers reach a height of 452 meters, making them the tallest buildings in the world at the time and still the tallest twin towers globally. The construction was a remarkable engineering feat, involving deep foundations and over 36,000 tonnes of steel, with a design inspired by Islamic art to reflect Malaysia’s culture. One of the towers was built by a Japanese team and the other by a South Korean team, completing the project in just under seven years — a testament to international collaboration and technical excellence.</p></div>
                            <div className="cardies3"></div>
                        </div>
                        <div className="parent-card">
                            <div className="card" ref={d1}>
                                <h1>Tallest Twin Towers in the world</h1>
                                <p>The Petronas Towers are the tallest twin towers in the world, standing at 452 meters (1,483 feet).
                                    They held the title of the tallest buildings in the world from 1998 to 2004.
                                </p>
                            </div>
                            <div className="card" ref={d2}>
                                <h1>Engineering Marvel</h1>
                                <p>Each tower has 88 floors and was built using a combination of reinforced concrete, steel, and glass.
                                    The towers are designed in Islamic geometric patterns, reflecting Malaysia's cultural heritage.
                                </p>
                            </div>
                            <div className="card" ref={d3}>
                                <h1>The Skybridge</h1>
                                <p>A skybridge connects the two towers at the 41st and 42nd floors.
                                    It is the world's highest 2-story bridge and acts as both a viewing platform and an emergency exit route.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="image-card">
                        <img ref={image} src="images/Parallax/City_Skyline.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}