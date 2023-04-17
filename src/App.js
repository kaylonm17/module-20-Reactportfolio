import logo from './logo.svg';
import './App.css';
import PortNavbar from './components/PortNavbar';
import PortJumbotron from './components/PortJumbotron';
import AboutMe from './components/aboutMe';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <PortNavbar />
      {/* JUMBOTRON */}
      <PortJumbotron />
      {/* ABOUT ME */}
      <AboutMe/>
      {/* CONTACT ME */}
      <ContactMe/>


    </div>


  );
}

export default App;