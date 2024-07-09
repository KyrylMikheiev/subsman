import Links from "./Links"
import "./Navbar.css"

export default function NavBarDesktop() {
    return (
        <nav className="nav">
            <a href="/" className="site-title"> subsman </a>
            <Links />
            <a href="/signup" className="signup-link">
                Start for free
            </a>
        </nav>
    )
}