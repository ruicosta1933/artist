import styles from "./contact.module.css";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import { FiTwitter } from "react-icons/fi"
import { FaTiktok, FaSpotify, FaSoundcloud, FaTwitch } from "react-icons/fa"

export default function Contact() {
    return (<>
               <div style={{color: "white", textAlign: "center", height: "10px", marginBottom:"20px"}}>
                  <h1><u>Redes Sociais</u></h1>
               </div>
               
               <div  className={styles.container}>
                  <div className={styles.group}>
                     <AiOutlineInstagram size={40}/> <a target="_blank" href="https://www.instagram.com/rui_costa_01/"><b>Instagram</b> </a>
                  </div>
                  <div className={styles.group}>
                     <FiTwitter size={40}/> <a target="_blank" href="https://twitter.com/ruicosta607"> <b>Twitter</b></a>
                  </div>
                  <div className={styles.group}>
                     <FaTiktok size={40} /> <a target="_blank" href="https://www.tiktok.com/@iamdacosta_"><b>TikTok</b></a>
                  </div>
               </div>
               <div style={{color: "white", textAlign: "center", height: "10px", marginBottom:"20px"}}>
                  <h1><u>Contactos Profissionais</u></h1>
               </div>
               <div  className={styles.container}>
                  
                    <div className={styles.group} style={{alignContent: "center"}}>
                       <SiGmail size={40}/> <a target="_blank" href="mailto:ruicosta607@gmail.com"> <b>Email</b></a>
                    </div>
               </div>
               <div style={{color: "white", textAlign: "center", height: "10px", marginBottom:"20px"}}>
                  <h1><u>Redes Musicais</u></h1>
               </div>
               <div  className={styles.container}>
                    <div className={styles.group} style={{alignContent: "center"}}>
                       <FaSpotify size={40}/> <a target="_blank" href="https://open.spotify.com/artist/6SMGmPZDizQV4hCYxVy2hh?si=_1xeETJBRWWUBcAOroW6Fg"> <b>Spotify</b></a>
                    </div>
                    <div className={styles.group} style={{alignContent: "center"}}>
                       <AiOutlineYoutube size={40}/> <a target="_blank" href="https://www.youtube.com/channel/UC9nrA3nvaiLHNn3qPmtiB5g"> <b>Youtube</b></a>
                    </div>
                    <div className={styles.group} style={{alignContent: "center"}}>
                       <FaSoundcloud size={40}/> <a target="_blank" href="https://soundcloud.com/ruicosta01"> <b>SoundCloud</b></a>
                    </div>
                    
               </div>
            </>
        )
}