import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";
interface IProps {
    link: string;
    logo: string;
    app: string;
    appLogo: string;
    width?: number;
    height?: number;
}

export function Card({  link, logo, app, appLogo, width,height  }: IProps) {

    return (
        <div className={styles.container}>
                <img src={logo} className={styles.image} />
            <a href={link} target="_blank">
                <div className={styles.onHover}>
                    <img src={appLogo} className={styles.appLogo} style={{ width ,height}} />
                    <p>{app}</p>
                </div>
            </a>
        </div>
    )
}