import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Slider from '../../components/Slider/Slider.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import DropDown from '../../components/Dropdown/Dropdown.jsx';
import Tag from '../../components/Tag/Tag.jsx';

// Css
import './Logement.css';

import { getOneLogement } from '../../services/data.service.js';

function Logement() {
  const [logement, setLogement] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchLogement = async (id) => {
      const logement = await getOneLogement(id);
      setLogement(logement);
    };
    fetchLogement(id).catch(console.error);
  }, [id]);

  return (
    <div className="logement">
      <Header />
      {logement ? (
        <div className="box">
          <Slider pictures={logement.pictures} />
          <div className="innerBox">
            <div className="left">
              <h1 className="title">{logement.title}</h1>
              <p className="location">{logement.location}</p>
              <div className="tags">
                {logement.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>;
                })}
              </div>
            </div>
            <div className="right">
              <div className="user">
                <img className="hostName" src={logement.host.picture} alt={logement.host.name} />
                <p className="host">{logement.host.name}</p>
              </div>
              <div className="stars">
                {[...Array(parseInt(logement.rating))].map((e, i) => {
                  return (
                    <img key={'complete' + i} src="../img/starFull.svg" className="complete" />
                  );
                })}
                {[...Array(5 - parseInt(logement.rating))].map((e, i) => {
                  return <img key={'empty' + i} src="../img/starEmpty.svg" className="empty" />;
                })}
              </div>
            </div>
          </div>
          <div className="dropdowns">
            <DropDown data={logement.description}>Description</DropDown>
            <DropDown data={logement.equipments}>Equipements</DropDown>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
}

export default Logement;
