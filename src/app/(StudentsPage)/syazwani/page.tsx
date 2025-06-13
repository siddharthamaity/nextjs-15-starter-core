
"use client"
import { Parallax } from "@/app/(StudentsPage)/syazwani/components/parallax";
import { Secparallax } from "@/app/(StudentsPage)/syazwani/components/secparallax";
import { Thirdparallax } from "./components/thirdparallax";
import { ForthParallax } from "./components/forthparallax";
import { Hero } from "@/components/heroMain";
import { Map } from "@/components/ui/map";
import OverlapImage from "./components/overlapImage";
import Quiz from "./components/quiz";
import { Quizsection } from "./components/quizsection";

const Page = () => {
    return (
        <>
        <div>
            <Parallax/>
            <Secparallax/>
            {/* <OverlapImage />  */}
            <ForthParallax/>
            <Thirdparallax/>           
            <Quizsection/>
            
            
        </div>
        </>
    );
};

export default Page;
