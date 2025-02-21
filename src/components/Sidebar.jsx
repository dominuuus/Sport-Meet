import styles from './Sidebar.module.css';
import icons from '../icons/icon.js';
import { PencilLine, UsersThree, Bicycle } from  'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={icons.capaUsuario} />

            <div className={styles.profile}>
                <img className={styles.avatar} src={icons.profileAvatar}/>
                <strong>Domingos Santiago</strong>
                <span>@dominuuus</span>
            </div>

            <div className={styles.sports}>
                <strong>Suas estatísticas</strong>
                <div className={styles.favSports}>
                    <strong>
                    <UsersThree />
                    12 clubes</strong>
                    <strong>
                    <Bicycle />
                    85 pedaladas</strong>
                </div>
                
            </div>

            <footer>
                <a href="#">
                <PencilLine />
                Edite seu perfil</a>
            </footer>

        </aside>


    )
}