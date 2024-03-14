import { Component } from 'react';
import { connect } from 'react-redux';

class BestiesList extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h3>Besties</h3>
        <ul>
          {this.props.besties.map((bestie) => (
            <li key={bestie.id}>{bestie.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    besties: state.besties,
  };
}

export default connect(mapStateToProps, null)(BestiesList);
