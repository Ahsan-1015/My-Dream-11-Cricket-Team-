import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import AvailableContainer from './Components/Availabale/AvailableContainer';

import MainContainer from './Components/MainContainer/MainContainer';
import { useEffect, useState } from 'react';
import Footer from './Components/Footter/Footter';

function App() {
  const [allPlayers, setAllPlayers] = useState([]);

  // active toggle ber fun
  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available',
  });

  const handleIsActiveStatus = status => {
    if (status === 'available') {
      setIsActive({
        available: true,
        status: 'available',
      });
    } else {
      setIsActive({
        available: false,
        status: 'selected',
      });
    }
  };
  console.log(isActive);

  useEffect(() => {
    fetch('playerInfo.json')
      .then(res => res.json())
      .then(data => setAllPlayers(data));
  }, []);

  return (
    <div className="font-fontSora">
      <Nav></Nav>
      <Hero></Hero>

      <AvailableContainer
        isActive={isActive}
        handleIsActiveStatus={handleIsActiveStatus}
      ></AvailableContainer>

      <MainContainer allPlayers={allPlayers}></MainContainer>

      <Footer></Footer>
    </div>
  );
}

export default App;
