// import react from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomeScreen from './Screens/HomeScreen'; 
import ProductScreen from './Screens/ProductScreen'; 


const App = () => {
  return (
    
    <Router>
      <Header />

      <main className = 'py-3'> {/* py-3 is a bootstrap class which will give padding to top and botto */}
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact /> { /*react-router-dom version 6 it is a bit different*/}
            <Route path='/product/:id' element={<ProductScreen />} /> { /*react-router-dom version 6 it is a bit different*/}
            
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>

  );
};

export default App;
