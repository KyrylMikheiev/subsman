import styles from "./Footer.module.css"
import LastLine from "./LastLine"


export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.footer_list}>
                <li className={styles.title_footer}>
                    <h1>subsman</h1>
                </li>
                <li>
                    <h5>Contact</h5>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                </li>
                <li>
                <h5>Contact</h5>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                </li>
                <li>
                <h5>Contact</h5>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                </li>
                <li>
                <h5>Contact</h5>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                    <a href="/lol">lol</a>
                </li>
            </ul>
            <LastLine />
        </div>
    )
}