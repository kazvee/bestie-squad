import { Component } from 'react';
import '../styles/index.css';
import BestiesList from './BestiesList';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Bestie Squad 😻</h1>
        <BestiesList />
        <Footer />
      </div>
    );
  }
}

export default App;
