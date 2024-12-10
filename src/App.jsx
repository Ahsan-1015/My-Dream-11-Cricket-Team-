// App.jsx
import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import AvailableContainer from './Components/Available/AvailableContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Footer from './Components/Footter/Footer';
// import Footer from './Components/Footer/Footer';

function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available',
  });
  const [coin, setCoin] = useState(0);

  const handleIsActiveStatus = status => {
    setIsActive({
      available: status === 'available',
      status,
    });
  };

  const handleAddCoin = updateCoin => {
    const newCoinBalance = coin + Number(updateCoin);
    if (newCoinBalance < 0) {
      toast.error('Coin balance cannot be negative!', {
        position: 'top-center',
      });
      return;
    }
    setCoin(newCoinBalance);
  };

  useEffect(() => {
    fetch('playerInfo.json')
      .then(res => res.json())
      .then(data => setAllPlayers(data));
  }, []);

  const handleSelected = selectedData => {
    const isExist = selected.find(
      previousData => previousData.playerId === selectedData.playerId
    );

    if (isExist) {
      toast.error('Player Already Taken', { position: 'top-center' });
      return;
    }

    if (coin < selectedData.biddingPrice) {
      toast.error('Not enough coins to select this player!', {
        position: 'top-center',
      });
      return;
    }

    if (selected.length >= 6) {
      toast.error("You Can't Select More Than 6 Players", {
        position: 'top-center',
      });
      return;
    }

    setSelected([...selected, selectedData]);
    setCoin(coin - selectedData.biddingPrice);
    toast.success(`Congrats! ${selectedData.name} is now in your squad`, {
      position: 'top-center',
    });
  };

  const handleDelete = id => {
    const updatedQueue = selected.filter(player => player.playerId !== id);
    setSelected(updatedQueue);
    const play = allPlayers.find(p => p.playerId === id);
    setCoin(coin + Number(play.biddingPrice));
    toast.warn('Player Removed');
  };

  return (
    <div className="font-fontSora">
      <Nav coin={coin}></Nav>
      <Hero handleAddCoin={handleAddCoin}></Hero>
      <AvailableContainer
        handleDelete={handleDelete}
        selected={selected}
        handleSelected={handleSelected}
        allPlayers={allPlayers}
        isActive={isActive}
        handleIsActiveStatus={handleIsActiveStatus}
      ></AvailableContainer>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
