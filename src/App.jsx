import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import AvailableContainer from './Components/Availabale/AvailableContainer';

import MainContainer from './Components/MainContainer/MainContainer';
import { useEffect, useState } from 'react';
import Footer from './Components/Footter/Footter';

function App() {
  const [allPlayers, setAllPlayers] = useState([]);

  // active toggle ber fun start
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

  // active toggle ber fun end

  const [coin, setCoin] = useState(0);

  const handleAddCoin = updateCoin => {
    setCoin(coin + updateCoin);
  };

  // all data fetch
  useEffect(() => {
    fetch('playerInfo.json')
      .then(res => res.json())
      .then(data => setAllPlayers(data));
  }, []);

  // selected start
  const [selected, setSelected] = useState([]);
  console.log(selected);

  const handleSelected = selectedData => {
    setSelected(selectedData);
    const isExist = selected.find(
      previousData => previousData.playerId === selectedData.playerId
    );

    if (!isExist) {
      setSelected([...selectedData, selectedData]);
    }
  };
  console.log(selected);

  return (
    <div className="font-fontSora">
      <Nav coin={coin}></Nav>
      <Hero handleAddCoin={handleAddCoin}></Hero>

      <AvailableContainer
        selected={selected}
        handleSelected={handleSelected}
        allPlayers={allPlayers}
        isActive={isActive}
        handleIsActiveStatus={handleIsActiveStatus}
      ></AvailableContainer>

      <Footer></Footer>
    </div>
  );
}

export default App;
