import icons from "../assets/icons/icon.tsx";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from "./Menu.module.css";

export function Menu() {
    return <>
        
            <div className={styles.navBar}>
                <nav className={styles.nav__container}>
                    <div>
                        <a href="" className={`${styles.nav__link} ${styles.nav__logo}`}>
                            <img src={icons.favicon} alt="" />
                            <span className={styles.nav__logo__name}>SportMeet</span>
                        </a>

                        <div className={styles.nav__list}>
                            <div className={styles.nav__items}>
                                <a href="#" className={styles.nav__link}>
                                    <i className="bi bi-search"></i>
                                    <span className={styles.nav__name}></span>
                                    <div className={styles.header__search}>
                                        <input type="search" name="search" id="search" placeholder="Pesquisar"/>
                                    </div>
                                </a>

                                <a href="" className={styles.nav__link}>
                                    <i className="bi bi-house"></i>
                                    <span className={styles.nav__name}>Início</span>
                                </a>

                                <div className={styles.nav__dropdown}>
                                    <a href="" className={styles.nav__link}>
                                        <i className="bi bi-person"></i>
                                        <span className={`${styles.nav__name} ${styles.nav__dropdown__icon}`}>Perfil</span>
                                    </a>

                                    <div className={styles.nav__dropdown__collapse}>
                                        <div className={styles.nav__dropdown__content}>
                                            <a href="" className={styles.nav__dropdown__item}>Círculos</a>
                                            <a href="" className={styles.nav__dropdown__item}>Conta</a>
                                            <a href="" className={styles.nav__dropdown__item}>Cofigurações</a>
                                        </div>
                                    </div>
                                </div>

                                <a href="" className={styles.nav__link}>
                                    <i className="bi bi-chat"></i>
                                    <span className={styles.nav__name}> Mensagens</span>
                                </a>

                                <a href="" className={styles.nav__link}>
                                    <i className="bi bi-bell"></i>
                                    <span className={styles.nav__name}>Notificações</span>
                                </a>

                                <a href="" className={styles.nav__link}>
                                    <i className="bi bi-people"></i>
                                    <span className={styles.nav__name}>Clubes</span>
                                </a>

                                <a href="" className={styles.nav__link}>
                                    <i className="bi bi-calendar"></i>
                                    <span className={styles.nav__name}>Eventos</span>
                                </a>

                                <a href="" className={styles.nav__link}>
                                    <i className="bi bi-play"></i>
                                    <span className={styles.nav__name}>Seu plano</span>
                                </a>

                                
                            </div>
                        </div>
                    </div>

                    <a href="" className={`${styles.nav__link} ${styles.nav__logout}`}>
                        <i className="bi bi-box-arrow-left"></i>
                        <span className={styles.nav__name}>Desconectar</span>
                    </a>
                </nav>
            </div>
        </>
}