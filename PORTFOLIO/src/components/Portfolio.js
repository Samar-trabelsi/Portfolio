import React from 'react';
import projet1 from '../assets/images/projet1.png';
import projet2 from '../assets/images/projet2.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Mes projets</h2>
      
      <div className="projet">
        <img src={projet1} alt="Image projet 1" />
        <p>Création d'une page web dynamique pour un site d'architecte d'intérieur avec JavaScript.</p>
        <p>
          <strong>Compétences développées :</strong><br />
          - Gestion des événements utilisateurs<br />
          - Manipulation du DOM<br />
          - Communication avec une API<br />
          - Création de formulaires interactifs
        </p>
        <p>
          <strong>Problématique rencontrée :</strong> Gestion complexe des formulaires.<br />
          <strong>Solution :</strong> Écouteurs d'événements et manipulation du DOM.
        </p>
        <a href="https://github.com/Samar-trabelsi/PROJET-3">Lien GitHub</a>
      </div>

      <div className="projet">
        <img src={projet2} alt="Image projet 2" />
        <p>Implémentation du front-end d'une application avec React et React Router pour une expérience utilisateur moderne et réactive.</p>
        <p>
          <strong>Compétences développées :</strong><br />
          - Initialisation d'une application avec Create React App<br />
          - Configuration de la navigation avec React Router<br />
          - Développement de composants React<br />
          - Mise en œuvre d'animations CSS<br />
          - Utilisation de Sass pour la gestion du CSS
        </p>
        <p>
          <strong>Problématique rencontrée :</strong> Navigation entre les pages sans rechargement. <br />
          <strong>Solution :</strong> Utilisation de React Router pour une navigation fluide.
        </p>
        <a href="https://github.com/Samar-trabelsi/PROJET-5">Lien GitHub</a>
      </div>
    </section>
  );
}

export default Portfolio;


