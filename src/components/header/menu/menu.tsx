import styles from "./menu.module.css";

interface IProps {
    title: string;
    link: string;
}

export function Menu ({ title, link }: IProps) {
    return(
        <div className={styles.container}>
            <a href={link}>{title}</a>
        </div>
        )
}