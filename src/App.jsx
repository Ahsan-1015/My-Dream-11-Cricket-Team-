import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import AvailableContainer from './Components/Availabale/AvailableContainer';
import Footer from './Components/Footter/Footter';

import MainContainer from './Components/MainContainer/MainContainer';

function App() {
  return (
    <div className="font-fontSora">
      <Nav></Nav>
      <Hero></Hero>
      <AvailableContainer></AvailableContainer>
      <MainContainer></MainContainer>

      <Footer></Footer>
    </div>
  );
}

export default App;
