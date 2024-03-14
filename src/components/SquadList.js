import { Component } from 'react';
import { connect } from 'react-redux';

class SquadList extends Component {
  render() {
    return (
      <div>
        <h2>Your Bestie Squad</h2>
        <ul className='list-group'>
          {this.props.squad.map((squaddie) => (
            <li className='list-group-item' key={squaddie.id}>
              <div className='list-item'>{squaddie.name}</div>
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

export default connect(mapStateToProps, null)(SquadList);
