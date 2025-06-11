
"use client"
import { Parallax } from "@/app/(StudentsPage)/syazwani/components/parallax";
import { Secparallax } from "@/app/(StudentsPage)/syazwani/components/secparallax";
import { Thirdparallax } from "./components/thirdparallax";
import { Hero } from "@/components/heroMain";
import { Map } from "@/components/ui/map";
import OverlapImage from "./components/overlapImage";


const Page = () => {
    return (
        <>
        <div>
            <Parallax/>
            <Secparallax/>
            {/* <OverlapImage />  */}
            <Thirdparallax/>           
        </div>
        </>
    );
};

export default Page;
