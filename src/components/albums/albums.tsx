import styles from './albums.module.css';

export default function Albums() {

    return (
        <div className={styles.container}>
            <div className={styles.division}>
                <div className={styles.imageDiv}>
                    <img src='/albumsNao.jpg' className={styles.image}/>
                </div>
                <div className={styles.desc}> 
                    <h2>Não Gosto Nem Desgosto (Muito pelo Contrário)</h2>
                    <p>Primeiro EP deste artista que pensa saber algo disto.</p>
                    <p>Aquele clássico álbum recheado de <i>"bangers"</i> mesmo sendo o primeiro projeto sério deste grupo glorioso e cheio de talento.</p>
                    <p>Neste colosso revê-se outra vez a tara do Ramiro juntamente com um reflexo sonoro do coração partido do mesmo...</p>
                    <p>Vemos o Alfredo & Amigos e um solo do Slim Mathers.</p>
                    <p>Este clássico do Hip-Hop Tuga contém 4 <i>"masterpieces"</i> sendo elas, respetivamente :</p>
                    <p>&emsp;&emsp;&#9679; Slim Mathers - Contrato</p>
                    <p>&emsp;&emsp;&#9679; Alfredo X Bareta X L1MAO - Duas Filas</p>
                    <p>&emsp;&emsp;&#9679; Ramiro - 12/01/21</p>
                    <p>&emsp;&emsp;&#9679; Ramiro - Soba Nota</p>
                </div>
            </div>
            <div style={{border: "1px solid white", width: "100%"}}></div>
            <div className={styles.division}>
                <div className={styles.desc}> 
                    <h2>Intelligence with Wings (Trailer)</h2>
                    <p>Segundo EP deste artista que pensa saber algo disto.</p>
                    <p>Consiste apenas de um <i>"trailer"</i>/cheirinhos do que este personagem tem feito e mostrar aos seus fãs assíduos que não tem estado parado porque parado só aos olhos dos ácaros.</p>
                    <p>Este clássico do Hip-Hop Tuga contém 6 <i>"masterpieces"</i> sendo elas, respetivamente :</p>
                    <p>&emsp;&emsp;&#9679; Ramiro - No One's Version</p>
                    <p>&emsp;&emsp;&#9679; Justino - Descombobulado</p>
                    <p>&emsp;&emsp;&#9679; Justino - Vid's Freestyle</p>
                    <p>&emsp;&emsp;&#9679; Ramiro - Muito Fundo ( Prod. By Alfredo )</p>
                    <p>&emsp;&emsp;&#9679; Ramiro - Linha</p>
                    <p>&emsp;&emsp;&#9679; Slim Mathers X Justino - Vista</p>
                </div>
                <div className={styles.imageDiv}>
                    <img src='/albumsInte.jpg' className={styles.image}/>
                </div>
            </div>
        </div>
    )

}