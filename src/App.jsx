import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import AvailableContainer from './Components/Availabale/AvailableContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import Footer from './Components/Footter/Footter';

function App() {
  const [allPlayers, setAllPlayers] = useState([]);

  const [selected, setSelected] = useState([]);

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
    console.log(updateCoin);
    setCoin(coin + Number(updateCoin));
  };

  // all data fetch
  useEffect(() => {
    fetch('playerInfo.json')
      .then(res => res.json())
      .then(data => setAllPlayers(data));
  }, []);

  // selected start

  const handleSelected = selectedData => {
    setSelected(selectedData);
    const isExist = selected.find(
      previousData => previousData.playerId === selectedData.playerId
    );

    // if (!isExist) {
    //   setSelected([...selected, selectedData]);
    // }

    if (!isExist) {
      if (coin < selectedData.biddingPrice) {
        toast.error('Not enough coins to select this player!', {
          position: 'top-center',
        });
      } else if (selected.length >= 6) {
        toast.error("You Can't Select More Then 6 Players", {
          position: 'top-center',
        });
        return;
      } else {
        setSelected([...selected, selectedData]);
        setCoin(coin - selectedData.biddingPrice);
        toast.success(
          'Congrates! ' + `${selectedData.name}` + ' is now in your squad',
          { position: 'top-center' }
        );
      }
    } else {
      toast.error('Player Already Taken');
      return;
    }
  };

  // const handleSelected = player => {

  //   const isExist = playerQueue.find(
  //     PreviousPlayers => PreviousPlayers.playerId === player.playerId
  //   );
  //   if (!isExist) {
  //     if (price < player.biddingPrice) {
  //       toast.error('Not enough coins to select this player!', {
  //         position: 'top-center',
  //       });
  //     } else if (playerQueue.length >= 6) {
  //       toast.error("You Can't Select More Then 6 Players", {
  //         position: 'top-center',
  //       });

  //       return;
  //     } else {
  //       SetPlayerQueue([...playerQueue, player]);
  //       SetPrice(price - player.biddingPrice);
  //       toast.success(
  //         'Congrates! ' + `${player.name}` + ' is now in your squad',
  //         { position: 'top-center' }
  //       );
  //     }
  //   } else {
  //     toast.error('Player Already Taken');
  //   }
  // };

  // !Delete

  const handleDelete = id => {
    handleRemove(id);
    const updatedQueue = selected.filter(player => player.playerId !== id);
    setSelected(updatedQueue);
    toast.warn('Remove Player');
  };

  const handleRemove = id => {
    const play = allPlayers.find(p => p.playerId === id);
    setCoin(Number(play.biddingPrice) + coin);
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
