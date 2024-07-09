import Links from "./Links"
import "./Navbar-mobile.css"

export default function NavBarMobile(props) {
    return (
        <nav className="nav-mobile">
            <a href="/" className="site-title"> subsman </a>
            <div className={props.open ? "ham-menu active" : "ham-menu"} onClick={() => props.setOpen(!props.open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <aside className={props.open ? "active" : ""}>
                <Links />
            </aside>
        </nav>
    )
}