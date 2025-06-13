import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button";
import Link from "next/link";

const buttonStyle = {
    backgroundColor: "#92CA6A",
    color: "#000000",
    padding: "20px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    border: "0px solid #000000",
    fontWeight: "light"
};


export function Navbar() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed", top: 0, right: 0, zIndex: 10, padding: "10px 20px", width: "100%", backgroundColor: "#92CA6A", }}>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                EcoStudy
            </div>
            <NavigationMenu className="text-foreground" style={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}>
                <NavigationMenuList style={{ listStyleType: "none", display: "flex", gap: "20px" }}>
                    <NavigationMenuItem>
                        <Link href="/syazwani">
                            <Button
                                style={buttonStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#DDDDDD")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#92CA6A")}
                            >
                                Syazwani
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/sweethorn">
                            <Button
                                style={buttonStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#DDDDDD")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#92CA6A")}
                            >
                                Sweethorn
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/amir">
                            <Button
                            style={buttonStyle}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#FFFFFF"; e.currentTarget.style.color = "#000000"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#92CA6A"; e.currentTarget.style.color = "#000000"; }}
                        >
                            Amir
                        </Button>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );

}