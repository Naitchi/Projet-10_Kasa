// Components
import Banner from '../../components/Banner/Banner.jsx';
import DropDown from '../../components/Dropdown/Dropdown.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

// Css
import './About.css';

function About() {
  return (
    <div className="app">
      <Header />
      <Banner className="margin" image={'banner_about_page.png'}></Banner>
      <DropDown
        data={
          'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        }
        valeur={true}
      >
        Fiabilité
      </DropDown>
      <DropDown
        data={
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        }
        valeur={true}
      >
        Respect
      </DropDown>
      <DropDown
        data={
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        }
        valeur={true}
      >
        Service
      </DropDown>
      <DropDown
        data={
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
        valeur={true}
      >
        Responsabilité
      </DropDown>
      <Footer />
    </div>
  );
}

export default About;
