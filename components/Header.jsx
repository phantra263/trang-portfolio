import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex items-center justify-between">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Quỳnh Trang<span className="text-accent-hover">.</span>
                    </h1>
                </Link>

                {/* desktop nav */}
                {/* <div className="hidden xl:flex">
                    <Nav />
                </div> */}

                {/* mobile nav */}
                {/* <div className="xl:hidden">
                    <MobileNav />
                </div> */}
            </div>
        </header>
    )
}

export default Header;