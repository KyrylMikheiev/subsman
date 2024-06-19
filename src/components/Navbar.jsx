import './Navbar.css'
import Hamburger from 'hamburger-react';

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title"> subsman </a>
            <ul>
                <li>
                    <a href="/how-it-works"> How it works </a>
                </li>
                <li>
                    <a href="/why-subsman"> Why subsman ? </a>
                </li>
                <li>
                    <a href="/pricing"> Pricing </a>
                </li>
                <li>
                    <a href="/sign-in">Sign in</a>
                </li>
            </ul>
            <button className="signup-button">
                <a href="/signup">Start for free</a>
            </button>
            <div className='burgermenu'>
                <Hamburger rounded/>
            </div>
        </nav>
    )
}