import './App.scss';
import {Work, About, Header, Footer, Testimonial, Skills} from './container'
import {Navbar} from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
