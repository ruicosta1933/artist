import styles from './albums.module.css';

export default function Albums() {

    return (
        <div className={styles.container}>
            <div className={styles.division}>
                <div className={styles.imageDiv} style={{marginRight:"10px"}}>
                    <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/album/0Iafs1Is7AICsW4IF1kQ26?utm_source=generator" allowFullScreen width="100%" height="100%" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    
                </div>
                <div className={styles.desc}> 
                    <h2><a target="_blank" href='https://open.spotify.com/album/0Iafs1Is7AICsW4IF1kQ26?si=rGhk-GlwQfKJD8MDrGQDiw'>Não Gosto Nem Desgosto (Muito pelo Contrário)</a></h2>
                    <p>Primeiro EP deste artista que pensa saber algo disto.</p>
                    <p>Aquele clássico álbum recheado de <i>"bangers"</i> mesmo sendo o primeiro projeto sério deste grupo glorioso e cheio de talento.</p>
                    <p>Neste colosso revê-se outra vez a tara do Ramiro juntamente com um reflexo sonoro do coração partido do mesmo...</p>
                    <p>Vemos o Alfredo & Amigos e um solo do Slim Mathers.</p>
                    <p>Este clássico do Hip-Hop Tuga contém 4 <i>"masterpieces"</i> sendo elas, respetivamente :</p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href='https://soundcloud.com/iamdacosta/slim-mathers-contrato'>Slim Mathers - Contrato</a></p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href='https://soundcloud.com/iamdacosta/alfredo-x-bareta-x-l1ma0-duas'>Alfredo X Bareta X L1MAO - Duas Filas</a></p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href='https://open.spotify.com/track/1u4Cj7DlP34voCbxunctwp?si=1c4897e8297f4251'>Ramiro - 12/01/21</a></p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href='https://soundcloud.com/iamdacosta/ramiro-soba-nota'>Ramiro - Soba Nota</a></p>
                </div>
            </div>
            <div style={{border: "1px solid white", width: "100%"}}></div>
            <div className={styles.division}>
                <div className={styles.desc}> 
                    <h2><a target="_blank" href="https://soundcloud.com/iamdacosta/sets/intelligence-with-wings-trailer">Intelligence with Wings (Trailer)</a></h2>
                    <p>Segundo EP deste artista que pensa saber algo disto.</p>
                    <p>Consiste apenas de um <i>"trailer"</i>/cheirinhos do que este personagem tem feito e mostrar aos seus fãs assíduos que não tem estado parado porque parado só aos olhos dos ácaros.</p>
                    <p>Este clássico do Hip-Hop Tuga contém 6 <i>"masterpieces"</i> sendo elas, respetivamente :</p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href="https://soundcloud.com/iamdacosta/ramiro-no-ones-version">Ramiro - No One's Version</a></p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href="https://soundcloud.com/iamdacosta/justino-descombobulado">Justino - Descombobulado</a></p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href="https://soundcloud.com/iamdacosta/justino-vids-freestyle">Justino - Vid's Freestyle</a></p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href="https://soundcloud.com/iamdacosta/ramiro-muito-fundo-prod-by">Ramiro - Muito Fundo ( Prod. By Alfredo )</a></p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href="https://soundcloud.com/iamdacosta/ramiro-linha">Ramiro - Linha</a></p>
                    <p>&emsp;&emsp;&#9679; <a target="_blank" href="https://soundcloud.com/iamdacosta/slim-mathers-x-justino-vista-1">Slim Mathers X Justino - Vista</a></p>
                </div>
                <div className={styles.imageDiv} style={{marginLeft:"10px"}}>
                <iframe width="100%" height="100%" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1355541847&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className={styles.soundCloud}><a href="https://soundcloud.com/iamdacosta" title="dacosta" target="_blank" className={styles.soundCloud2}>dacosta</a> · <a href="https://soundcloud.com/iamdacosta/sets/intelligence-with-wings-trailer" title="Intelligence with Wings (Trailer)" target="_blank" className={styles.soundCloud2}>Intelligence with Wings (Trailer)</a></div>
                </div>
            </div>
        </div>
    )

}