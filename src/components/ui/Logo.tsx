import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Logo() {
    return (
        <Link to="/" className="flex items-center">
            <img
                src={logo}
                alt="EzPrint Logo"
                className="h-14 w-auto object-contain"
            />
        </Link>
    );
}
