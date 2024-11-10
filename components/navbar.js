import styles from "../styles/nav.module.css";

export default function Navbar() {
    return (
        <>
            <div className={styles.navWrapper}>
                <div className={styles.logo}>
                    <h3>Trade.ai</h3>
                </div>
                <div className={styles.navItems}>
                    <a href="#">Home</a>
                    <a href="#">Predict</a>
                    <a href="#">Socials</a>
                    <a href="#">Community</a>
                </div>
                <button className={styles.signInButton}>Sign In</button>
            </div>
        </>
    );
}
