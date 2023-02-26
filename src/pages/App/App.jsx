import { useCallback, useEffect, useState } from 'react';

// Components
import Banner from '../../components/Banner/Banner.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Thumb from '../../components/Thumb/Thumb.jsx';

// Css
import './App.css';

import { getLogementList } from '../../services/data.service.js';

const logements = [];

function App() {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    getLogementList()
      .then((response) => {
        logements.push(...response);
        forceUpdate();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Banner className="margin" image={'banner_home_page.png'}>
        Chez vous, partout et ailleurs
      </Banner>
      <div className="container">
        {logements.map((item, index) => (
          <Thumb key={index} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
