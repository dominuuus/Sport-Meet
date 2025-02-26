import styles from "./Header.module.css";
import icons from "../assets/icons/icon.tsx";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Header() {
    return (
        <div className={styles.header}>
            <div>
                <span>SportMeet</span>
            </div>
            <div className={styles.socialMedias}>
                <span>Siga-nos </span>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
            </div>
            <div className={styles.linksAccess}>
                <a href="#">Entrar</a>
                <a href="#">Cadastrar</a>
                <div className={styles.avatar}>
                    <img src={icons.profileAvatar} alt="" />
                </div>
            </div>

        </div>
    )
}