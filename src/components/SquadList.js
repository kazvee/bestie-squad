import { Component } from 'react';
import { connect } from 'react-redux';
import { removeBestieById } from '../actions';

class SquadList extends Component {
  render() {
    return (
      <div>
        <h2>Your Bestie Squad</h2>
        <ul className='list-group'>
          {this.props.squad.map((squaddie) => (
            <li className='list-group-item' key={squaddie.id}>
              <div className='list-item'>{squaddie.name}</div>
              <div
                className='list-item right-button'
                onClick={() => this.props.removeBestieById(squaddie.id)}
              >
                <img
                  width='48'
                  height='48'
                  src='https://img.icons8.com/doodle/48/delete-sign.png'
                  alt='remove bestie'
                />
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
    squad: state.squad,
  };
}

export default connect(mapStateToProps, { removeBestieById })(SquadList);
