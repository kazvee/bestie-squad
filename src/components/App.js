import { Component } from 'react';
import '../styles/index.css';
import BestiesList from './BestiesList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Bestie Squad 😻</h1>
        <BestiesList />
      </div>
    );
  }
}

export default App;
