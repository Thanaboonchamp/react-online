
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <>
     <Logo/>
      <Header/>
      <Footer title={"Facebook"} website="www.google.com"
       address="Bangkok" postcode={1207}
       isOpen={true}></Footer>
    </>
  );
}

export default App;
