import { SocialIcon } from "react-social-icons"
import styles from "./Footer.module.css"

export default function LastLine() {
    return (
        <div className={styles.last_line_wrapper}>  
            <hr style={{width: "100%"}}/>
            <div className={styles.last_line}>
                <p style={{color: "white"}}>© Subsman 2024</p>
                <ul className={styles.last_line_list}>
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

                <ul className={styles.socials}>
                    <SocialIcon bgColor="white" fgColor="black" url="https://www.facebook.com/" />
                    <SocialIcon bgColor="white" fgColor="black" url="https://www.instagram.com/" />
                    <SocialIcon bgColor="white" fgColor="black" url="https://www.linkedin.com/" />
                    <SocialIcon bgColor="white" fgColor="black" url="https://x.com/" />
                </ul>
            </div>
        </div>
    )
}