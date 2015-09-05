import { connect } from 'react-redux';
import LocationView from './view';
import { location } from 'actions';

function mapStateToProps(state) {
  return {
    session: state.session,
    location: state.location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLocation: () => dispatch()
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationView);
