import styles from './logo.module.css';

export function Logo() {
    return (
        <div className={styles.container}>
            <img src='/logo_letra_branca.png' className={styles.logo} />
        </div>
    )
}