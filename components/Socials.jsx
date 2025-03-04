import Link from "next/link";
import { FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/trang.minion.37",
        icon: <FaFacebook />
    },
    {
        name: "Gmail",
        href: "mailto:nguyenquynhtrang2002@gmail.com",
        icon: <FaEnvelope />
    },
    {
        name: "Phone",
        href: "tel:+0972551294",
        icon: <FaPhone />
    }
]
const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socialLinks.map((link) => (
                <Link href={link.href} key={link.name} className={iconStyles}>
                    {link.icon}
                </Link>
            ))}
        </div>
    )
}

export default Socials;
