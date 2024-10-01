import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Profil from './components/Profil/Profil';
import InfoCompetence from './components/InfoCompetence/InfoCompetence';
import Realisation from './components/Realisation/Realisation';
import Footer from './components/Footer/Footer';


function App() {
  return (
     <>
      <Navbar />
      <Hero />
      <Profil />
      <InfoCompetence />
      <Realisation />
      <Footer/>
     </>
  );
}

export default App;
