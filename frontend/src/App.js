import react from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <>
      <Header />

      <main className = 'py-3'> {/* py-3 is a bootstrap class which will give padding to top and botto */}
        <Container>
          <h1>welcome to proshop</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default App;
