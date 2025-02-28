import styles from "./Content.module.css";
import icons from "../assets/icons/icon.tsx";
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchClub from "./SearchClub.tsx";

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
                <SearchClub />
            </div>
            
        </div>

        )

}