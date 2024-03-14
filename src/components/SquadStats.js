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

  render() {
    return (
      <div>
        <h2>Squad Stats</h2>
        <ul>
          <li className='list-group-item'>Total Cuteness: {this.cuteness()}</li>
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
