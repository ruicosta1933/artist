import { Logo } from "./logo/logo";
import { Menu } from "./menu/menu";
import styles from "./header.module.css";
import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"
import {TiThMenu} from "react-icons/ti"
export function Header() {

    const [active, setActive] = useState(false);

    return(
        <div className={styles.container}>
            <Logo />
            <div className={styles.menu}>
                <Menu title="HOME" link="/" />
                <Menu title="EVENTS" link="/events" />
                <Menu title="CONTACT" link="/contact" />
            </div>
            { active && <div className={styles.menuSlide}>  
                        <div className={styles.closeButton} onClick={() => setActive(!active)}><AiOutlineClose size={30}/></div>
                            <Menu title="HOME" link="/" />
                            <Menu title="EVENTS" link="/events" />
                            <Menu title="CONTACT" link="/contact" />
                        </div>
            }

            <div className={styles.menuResponsive} onClick={() => setActive(!active)}>
                <TiThMenu size={30}/>
            </div>
            
        </div>
    )
}
