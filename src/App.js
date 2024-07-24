import React from 'react';
import './App.css';
import { Header, Footer, Container, Hero , Menu , Location} from './components';


const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Menu/>
        <Location/>
      </Container>
      <Footer />
    </>
  );
}

export default App;