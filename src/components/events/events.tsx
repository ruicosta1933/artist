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
                <h1 className={styles.text}>La Cantera |<a style={{textDecoration:"none"}} href="https://www.instagram.com/smokingbars.oficial/" target="_blank"> &nbsp;Smoking Bars</a></h1>
             
                <h3 className={styles.text}> 6 de Agosto | Lisboa</h3>
              
                <p className={styles.text}>La Cantera é um evento de Batalhas de RAP organizado pela Smoking Bars.</p>
                <p className={styles.text}>Este evento tem o intuito de dar palco a rappers, com menores dimensões, de se poderem mostrar e provar o seu valor !</p>
            
                </a>
               
            </div>
        </div>
    )
}