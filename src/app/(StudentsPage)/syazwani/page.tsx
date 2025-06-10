
"use client"
import { Parallax } from "@/app/(StudentsPage)/syazwani/components/parallax";
import { Secparallax } from "@/app/(StudentsPage)/syazwani/components/secparallax";
import { Thirdparallax } from "./components/thirdparallax";
import { Hero } from "@/components/heroMain";
import { Map } from "@/components/ui/map";


const Page = () => {
    return (
        <>
        <div>
            <Parallax/>
            <Secparallax/>
            <Thirdparallax/>           
        </div>
        </>
    );
};

export default Page;
