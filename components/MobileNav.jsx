'use client'

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Resume",
        href: "/resume",
    },
    {
        name: "Work",
        href: "/work",
    },
    {
        name: "Contact",
        href: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                {/* logo */}
                <div className="mt-32 mb-35 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Trà Phan<span className="text-accent-hover">.</span>
                        </h1>
                    </Link>
                </div>

                {/* nav links */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {navLinks.map((link, index) => (
                        <Link key={index} href={link.href} className={`${link.href === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;
