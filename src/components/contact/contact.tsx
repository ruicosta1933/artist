import styles from "./contact.module.css";
import { AiOutlineInstagram } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import { FiTwitter } from "react-icons/fi"
export default function Contact() {
    return (
                <div  className={styles.container}>
                    <div className={styles.group}>
                       <AiOutlineInstagram size={40}/> <a target="_blank" href="https://www.instagram.com/rui_costa_01/"><b>daInstagram</b> </a>
                    </div>
                    <div className={styles.group}>
                       <SiGmail size={40}/> <a target="_blank" href="mailto:ruicosta607@gmail.com"> <b>daEmail</b></a>
                    </div>
                    <div className={styles.group}>
                       <FiTwitter size={40} /> <a target="_blank" href="https://twitter.com/ruicosta607"> <b>daTwitter</b></a>
                    </div>
                </div>
        )
}