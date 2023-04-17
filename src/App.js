// import logo from './logo.svg';
import './App.css';
import Navbarport from './components/Navbarport';
import Jumbotronport from './components/Jumbotronport';
import AboutMe from './components/AboutMe';
import ContactMe from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbarport/>
      {/* JUMBOTRON */}
      <Jumbotronport />
      {/* ABOUT ME */}
      <AboutMe/>
      {/* CONTACT ME */}
      <ContactMe/>


    </div>


  );
}

export default App;