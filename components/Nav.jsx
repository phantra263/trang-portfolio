
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-x-8">
            {navLinks.map((link, index) => (
                <Link key={index} href={link.href} className={`${pathname === link.href
                    && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent-hover transition-all`}>
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}

export default Nav;