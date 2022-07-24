import { Logo } from "./logo/logo";
import { Menu } from "./menu/menu";
import styles from "./header.module.css";

export function Header() {
    return(
        <div className={styles.container}>
            <Logo />
            <div className={styles.menu}>
                <Menu title="SHOP" link="/shop" />
                <Menu title="VIDEOS" link="/videos" />
                <Menu title="TOUR" link="/tour" />
                <Menu title="LYRICS" link="/lyrics" />
            </div>
        </div>
    )
}
