import styles from "./events.module.css";

export function Events() {
    return (
        <div className={styles.container}>
            <div className={styles.divImage}>
                {/* <div id={styles.showImage}></div> */}
              <img className={styles.image} src="cartaz.jpeg"/>
            </div>
            <div className={styles.divText} >
                <a>
                <h1>La Cantera | <a style={{textDecoration:"none"}} href="https://www.instagram.com/smokingbars.oficial/" target="_blank">Smoking Bars</a></h1>
             
                <h3 className={styles.text}> 6 de Agosto | Lisboa</h3>
                </a>
            </div>
        </div>
    )
}