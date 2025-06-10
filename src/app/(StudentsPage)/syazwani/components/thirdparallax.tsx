"use client";
import { Map } from "@/components/ui/map";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { section } from "framer-motion/client";
import styles from "./syazwani.module.css";
import ReviewsCarousel from "./reviewcarousel";


export function Thirdparallax() {
    const [reviews, setReview] = useState<google.maps.places.PlaceReview[]>([]);
    const [loading, setLoading] = useState(true);


    return (
        <section className={styles.pageContainer} >
            
                <div className=""> 
                    <h1>Syazwani's Research</h1>

                    <p>
                        This research focuses on tourism management and its impact on customer satisfaction,
                        using the Petronas Twin Towers in Kuala Lumpur as a case study.
                    </p>


                    <h2>Research Location</h2>
                    <h2>Visitor Reviews</h2>
                    <ReviewsCarousel />
                    
                </div>
                <div className=""><Map /></div>
               
                
            
        </section>
    );
}
