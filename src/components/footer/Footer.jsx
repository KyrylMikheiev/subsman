import { SocialIcon } from "react-social-icons"
import "./Footer.css"


export default function Footer() {
    return (
        <div className="footer">
            <ul className="footer-list">
                <li>
                    <h1>subsman</h1>
                </li>
                <li>
                    <h5>Contact</h5>
                        <li>yes</li>
                        <li>yes</li>
                        <li>yes</li>
                        <li>yes</li>  
                </li>
                <li>
                <h5>Contact</h5>
                        <li>yes</li>
                        <li>yes</li>
                        <li>yes</li>
                        <li>yes</li>
                </li>
                <li>
                    
                <h5>Contact</h5>
                        <li>yes</li>
                        <li>yes</li>
                        <li>yes</li>
                        <li>yes</li>
                </li>
                <li>
                    
                <h5>Contact</h5>
                        <li>yes</li>
                        <li>yes</li>
                        <li>yes</li>
                        <li>yes</li>
                </li>
            </ul>
            <div className="last-line-wrapper">
                <hr style={{width: "80%"}}/>
                <div className="last-line">
                    <p style={{color: "white"}}>© Subsman 2024</p>
        	        <ul>
                        <li>
                            <a href="/terms-of-service">Terms of Service </a>
                        </li>
                        <li>
                            <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/manage-privacy">Manage Privacy</a>
                        </li>
                        <li>
                            <a href="/cookie-policy">Cookie Policy</a>
                        </li>
                    </ul>

                    <ul>
                        <SocialIcon bgColor="white" fgColor="black" url="https://www.facebook.com/" />
                        <SocialIcon bgColor="white" fgColor="black" url="https://www.instagram.com/" />
                        <SocialIcon bgColor="white" fgColor="black" url="https://www.linkedin.com/" />
                        <SocialIcon bgColor="white" fgColor="black" url="https://x.com/" />
                    </ul>
                </div>
            </div>
        </div>
    )
}