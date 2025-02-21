import styles from './Posts.module.css';
import icons from '../icons/icon.js';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src={icons.profileAvatar} />
                    <div>
                        <strong>Domingos Santiago</strong>
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
        </article>
    )
}