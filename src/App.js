import React from 'react';
import './App.css';
import { Header, Footer, Container, Hero , Menu , Location , InstagramPost} from './components';


const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <InstagramPost/>
        <Menu/>
        <Location/>
      </Container>
      <Footer />
    </>
  );
}

export default App;