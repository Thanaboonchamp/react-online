
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="logo">
     <Logo/>
      <Header/>
      <Footer title={"Facebook"} website="www.google.com"
       address="Bangkok" postcode={1207}
       isOpen={true}></Footer>
    </div>
  );
}

export default App;
