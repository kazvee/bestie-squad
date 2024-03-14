import { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
  cuteness() {
    let cuteness = 0;
    this.props.squad.forEach((squaddie) => {
      cuteness += squaddie.cuteness;
    });
    return cuteness;
  }

  friendship() {
    let friendship = 0;
    this.props.squad.forEach((squaddie) => {
      friendship += squaddie.friendship;
    });
    return friendship;
  }

  charm() {
    let charm = 0;
    this.props.squad.forEach((squaddie) => {
      charm += squaddie.charm;
    });
    return charm;
  }

  render() {
    return (
      <div>
        <h2>Squad Stats</h2>
        <ul>
        <li className='list-group-item'>Total Cuteness: {this.cuteness()}</li>
          <li className='list-group-item'>Total Friendship: {this.friendship()}</li>
          <li className='list-group-item'>Total Charm: {this.charm()}</li>
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

export default connect(mapStateToProps, null)(SquadStats);
