import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Place from './components/place/Place';
import Program from './components/program/Program';
import Questions from './components/questions/Questions';
import Organizator from './components/organizator/Organizator';
import Form from './components/form/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Container>
          <Header />
          <Place />
          <Program />
          <Questions />
          <Organizator />
          <Form />
          <Footer />
        </Container>
    </div>  
  );
}

export default App;
