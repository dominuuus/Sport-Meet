import styles from "./Comment.module.css";
import icons from "../icons/icon.js";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar.jsx";

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(content);
    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={icons.profileAvatar}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thayana Lira</strong>
                            <time title="22 de fevereiro às 10:20" dateTime="2025-02-22 10:20:33">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar o comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>

                    <button>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>20</span>
                    </button>

                </footer>


            </div>

        </div>
    )
}