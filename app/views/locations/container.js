import { connect } from 'react-redux';
import LocationsView from './view';

function mapStateToProps(state) {
  return {
    session: state.session,
    locations: state.locations
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsView);
