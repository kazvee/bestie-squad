import { Component } from 'react';
import { connect } from 'react-redux';
import { addBestieById } from '../actions';

class BestiesList extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h3>Besties</h3>
        <ul className='list-group'>
          {this.props.besties.map((bestie) => (
            <li className='list-group-item' key={bestie.id}>
              <div className='list-item'>{bestie.name}</div>
              <div
                className='list-item right-button'
                onClick={() => this.props.addBestieById(bestie.id)}
              >
                ➕
              </div>
            </li>
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addBestieById }, dispatch);
// }
// Can simplify code and improve readability by directly passing the action creator as an object in the second argument of connect()

// export default connect(mapStateToProps, mapDispatchToProps)(BestiesList);
export default connect(mapStateToProps, { addBestieById })(BestiesList);
