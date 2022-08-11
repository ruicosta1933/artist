import styles from './logo.module.css';

export function Logo() {
    return (
        <div className={styles.container}>
             <a href='/'><img className={styles.logo} src='/Rui.png'/></a>
        </div>
    )
}