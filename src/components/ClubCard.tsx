import React from "react";
import { Club } from "../bd/clubes/clubInterface";
import styles from "./ClubCard.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface ClubCardProps {
    club: Club
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
    return (
        <div className={styles.clubBox}>
            <div className={styles.clubBannerImg}>
                <img className={styles.clubBannerImg} src={club.bannerImg} alt="Banner do clube" />
            </div>
            
            <div className={styles.sport}>
                <span className={styles.sport}>{club.sport}</span>
            </div>

            <div className={styles.clubDetails}>
                <div>
                    <div className={styles.clubName}>{club.name}</div>
                    <div className={styles.clubMembrosLocal}>
                        <i className="bi bi-people"></i>
                        <span>{club.members} membros</span>
                        <i className="bi bi-geo-alt"></i>
                        <span>{club.city}, {club.state}</span>
                    </div>
                </div>
                <div className={styles.nextActivity}>
                    <div className={styles.nextActivityLabel}>
                        <i className="bi bi-calendar-event"></i>
                        <span>Próxima atividade</span>
                    </div>
                    <div className={styles.boxActivity}>
                        <span>{club.dateNextActivity}</span>
                        <span className={styles.nameActivity}>{club.nexActivity}</span>
                        <span>{club.localNextActivity}</span>
                    </div>
                </div>
            </div>

            <div className={styles.buttonIn}>
                <button>Entrar no clube</button>
            </div>
        </div>
    )
}

export default ClubCard;