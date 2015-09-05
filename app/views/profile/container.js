import { connect } from 'react-redux';
import ProfileView from './view';

function mapStateToProps(state) {
  return {
    session: state.session,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileView);
