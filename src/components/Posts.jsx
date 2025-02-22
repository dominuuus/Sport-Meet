import styles from './Posts.module.css';
import icons from '../icons/icon.js';
import { Comment } from './Comment.jsx';
import { Avatar } from './Avatar.jsx';

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.headerPost}>
                <div className={styles.author}>
                    <Avatar hasBorder={false} src={icons.profileAvatar} />
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
                <p>Todo sábado às 9h da manhã</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Comentários</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}