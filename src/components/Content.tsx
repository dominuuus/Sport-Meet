import styles from "./Content.module.css";
import icons from "../assets/icons/icon.tsx";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function MainContent() {
    return (

        <div className={styles.content}>
            <div className={styles.slides}>
                <div className={styles.carousel}>
                    <img src={icons.capaUsuario} alt="" />
                </div>
                <div className={styles.ads}>
            
                    <div className={styles.adsBlock1}>
                        <img src={icons.carnaval} alt="" />
                    </div>
            
                    <div className={styles.adsBlock2}>
                        <img src={icons.maratona} alt="" />                        
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.menuClubes}>
                    <div className={styles.selectedClub}>
                        <a href="#">Populares</a>
                    </div>
                    <a href="#">Futebol</a>
                    <a href="#">Corrida</a>
                    <a href="#">Vôlei</a>
                    <a href="#">Ciclismo</a>
                    <a href="#">Natação</a>
                    <a href="#">mais clubes</a>
                </div>
            </div>

            <div className={styles.buttonsFilter}>
                <button>Mais ativos</button>
                <button>Mais antigos</button>
                <button>Novos clubes</button>
                <div className={styles.searchCity}>
                    <input type="search" name="search-city" placeholder="Pesquisar por cidade"/>
                    <i className="bi bi-search"></i>
                </div>
                <div className={styles.selectPratica}>
                    <select name="nivelPratica">
                        <option value="iniciante">Iniciante</option>
                        <option value="praticante">Praticante</option>
                        <option value="experiente">Experiente</option>
                        <option value="profissional">Profissional</option>
                    </select>
                </div>

                <div className={styles.searchClub}>
                    <input type="search" name="search-city" placeholder="Pesquise por nome do clube"/>
                    <i className="bi bi-search"></i>
                </div>

            </div>

            <div className={styles.clubBox}>
                <div className={styles.suggestedClub}>
                    <span>Clube1</span>
                </div>

                <div className={styles.suggestedClub}>
                    <span>Clube2</span>
                </div>

                <div className={styles.suggestedClub}>
                    <span>Clube3</span>
                </div>

            </div>
        </div>

        )

}