import styles from './Posts.module.css';
import icons from '../icons/icon.js';

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.headerPost}>
                <div className={styles.author}>
                    <img className={styles.avatar} src={icons.profileAvatar} />
                    <div className={styles.authorInfo}>
                        <strong className={styles.author}>Domingos Santiago</strong>
                        <span>@dominuuus</span>
                    </div>
                </div>
                <time title="21 de fevereiro às 14:13" dateTime="2024 02-21 14:13:38"> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera!</p>
                <p>Hoje a pedalada foi maravilhosa</p>
                <p>Vem fazer parte do grupo!</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Comentários</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}