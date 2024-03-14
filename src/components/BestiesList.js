import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBestieById } from '../actions';

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addBestieById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BestiesList);
