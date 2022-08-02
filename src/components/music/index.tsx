import { Card } from "./card/card";
import styles from './music.module.css';

export function Music() {
    return ( 
        <div className={styles.container}>
            <Card link="https://open.spotify.com/artist/6SMGmPZDizQV4hCYxVy2hh?si=4qeXNBK4TFGswQQK8tvV1g" logo="/spotify.jpg" app="daSpotify" appLogo="/spotifyLogo.png" />
            <Card link="https://soundcloud.com/iamdacosta" logo="/soundcloud.jpg" app="daSoundCloud" appLogo="/soundcloudLogo.png" width={250} height={150}/>
            <Card link="https://www.youtube.com/channel/UC9nrA3nvaiLHNn3qPmtiB5g" logo="/youtube.jpg" app="daYouTube" appLogo="/youtubeLogo.png" width={250}/>
        </div>
    );
}