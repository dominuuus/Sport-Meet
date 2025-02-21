import styles from "./Header.module.css";
import sportMeetLogo from "../icons/logo-nome.png"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={sportMeetLogo} alt="Logo SportMeet" />
        </header>
    )
}