import { Component } from 'react';
import '../styles/index.css';
import BestiesList from './BestiesList';
import Footer from './Footer';
import SquadList from './SquadList';
import SquadStats from './SquadStats';

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
        <div className='col-md-4'>
          <BestiesList />
        </div>
        <div className='col-md-4'>
          <SquadList />
        </div>
        <div className='col-md-4'>
          <SquadStats />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
