
"use client"
import { Parallax } from "@/app/(StudentsPage)/syazwani/components/parallax";
import { Secparallax } from "@/app/(StudentsPage)/syazwani/components/secparallax";
import { Hero } from "@/components/heroMain";
import { Map } from "@/components/ui/map";


const Page = () => {
    return (
        <>
        <div>
            <Parallax/>
            <Secparallax/>
            <section className="parallax-outer">
                <div className="parallax" style={{padding: "60px"}}>
                    <Map/>
                </div>
            </section>            
        </div>
        </>
    );
};

export default Page;
