import { Component } from 'react';
import '../styles/index.css';
import BestiesList from './BestiesList';
import Footer from './Footer';
import SquadList from './SquadList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='header-container'>
          <h1>Bestie Squad</h1>
          <img
            className='header-image'
            width='64'
            height='64'
            src='https://img.icons8.com/dusk/64/sylvanian-families.png'
            alt='bestie squad logo'
          />
        </div>
        <div className='col-md-6'>
          <BestiesList />
        </div>
        <div className='col-md-6'>
          <SquadList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
