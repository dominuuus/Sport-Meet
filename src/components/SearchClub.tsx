// src/components/SearchClub.tsx
import React, { useState } from "react";
import clubsDataJson from "../bd/clubes/clubsData.json";
import { Club } from "../bd/clubes/clubInterface";
import ClubComponent from "../components/ClubCard";
import styles from "./SearchClub.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const SearchClub: React.FC = () => {
  const initialClubs = clubsDataJson as Club[];
  const [filter, setFilter] = useState<string>(""); // Filtro ativo (mais antigos, novos, etc.)
  const [sportFilter, setSportFilter] = useState<string>(""); // Filtro por esporte
  const [citySearch, setCitySearch] = useState<string>(""); // Busca por cidade
  const [nameSearch, setNameSearch] = useState<string>(""); // Busca por nome

  // Lista de esportes únicos para o filtro
  const sportButtons = ["Futebol", "Corrida", "Vôlei", "Ciclismo", "Natação", "Futsal", "Capoeira", "Skate"];

  // Função para aplicar filtros e buscas
  const getFilteredClubs = (): Club[] => {
    let filteredClubs = [...initialClubs];

    // Filtro por cidade
    if (citySearch) {
      filteredClubs = filteredClubs.filter((club) =>
        club.city.toLowerCase().includes(citySearch.toLowerCase())
      );
    }

    // Filtro por nome
    if (nameSearch) {
      filteredClubs = filteredClubs.filter((club) =>
        club.name.toLowerCase().includes(nameSearch.toLowerCase())
      );
    }

    // Filtro por esporte
    if (sportFilter) {
      filteredClubs = filteredClubs.filter((club) => club.sport === sportFilter);
    }

    // Filtros de ordenação
    switch (filter) {
      case "oldest":
        return filteredClubs.sort(
          (a, b) => new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime()
        );
      case "newest":
        return filteredClubs.sort(
          (a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
        );
      case "active":
        return filteredClubs.sort((a, b) => b.popularity - a.popularity);
      default:
        return filteredClubs; // Sem ordenação adicional
    }
  };

  const filteredClubs = getFilteredClubs();

  return (
    <div>

        {/* Filtro por esporte com botões */}
        
      <div className={styles.menuClubes}>
        <button onClick={() => setFilter("active")} className={styles.selectClub}>Populares</button>

        {sportButtons.map((sport) => (
          <button
            key={sport}
            onClick={() => setSportFilter(sport)}
            className={styles.selectClub}
          >
            {sport}
          </button>
        ))}

        <select name="more-sports">
            <option value="">mais clubes</option>
            <option value="basquete">Basquete</option>
            <option value="boliche">Boliche</option>
            <option value="caminhada">Caminhada</option>
            <option value="domino">Dominó</option>
            <option value="escalada">Escalada</option>
            <option value="jiujitsu">Jiu-jitsu</option>
            <option value="judo">Judô</option>
            <option value="karate">Karatê</option>
        </select>

      </div>

      {/* Filtros de ordenação */}
      <div className={styles.buttonsFilter}>
        <button onClick={() => setFilter("oldest")}>Mais Antigos</button>
        <button onClick={() => setFilter("newest")}>Mais Novos</button>
        <button onClick={() => setFilter("active")}>Mais Ativos</button>

        <div className={styles.searchCity}>
            <input
            type="text"
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
            placeholder="Digite a cidade"
            />
            <i className="bi bi-search"></i>
        </div>

        <div className={styles.searchClub}>
            <input
            type="text"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            placeholder="Digite o nome do clube"
            />
            <i className="bi bi-search"></i>
         </div>

        <button onClick={() => setFilter("")} onAuxClick={() => setSportFilter("")}>Limpar filtros</button>

      </div>

    

      {/* Lista de clubes filtrados */}
      <div className={styles.clubBox}>
        {filteredClubs.length > 0 ? (
          filteredClubs.map((club) => <ClubComponent key={club.id} club={club} />)
        ) : (
          <p>Nenhum clube encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default SearchClub;