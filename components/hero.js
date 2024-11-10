import styles from "../styles/hero.module.css"
export default function Hero(){
    return(
        <>
        <div className={styles.heroWrapper}>
            <div className={styles.mainHeader}>
                <h1>Trade with <br/> AI Magic</h1>
            </div>
            <div className={styles.subHeader}>
                <p>Experience seamless trading with AI Magic, <br/>where advanced AI powers your trading decisions.</p>
            </div>

            <button className={styles.bttn}>Get Prediction</button>

        </div>
        </>
    )
}