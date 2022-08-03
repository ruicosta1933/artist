import styles from "./contact.module.css";
import { AiOutlineInstagram } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import { FiTwitter } from "react-icons/fi"
import { FaTiktok } from "react-icons/fa"

export default function Contact() {
    return (
                <div  className={styles.container}>
                    <div className={styles.group}>
                       <AiOutlineInstagram size={40}/> <a target="_blank" href="https://www.instagram.com/iamdacosta_/"><b>daInstagram</b> </a>
                    </div>
                    <div className={styles.group}>
                       <SiGmail size={40}/> <a target="_blank" href="mailto:ruicosta607@gmail.com"> <b>daEmail</b></a>
                    </div>
                    <div className={styles.group}>
                       <FaTiktok size={40} /> <a target="_blank" href="https://www.tiktok.com/@iamdacosta_"><b>daTikTok</b></a>
                    </div>
                </div>
        )
}