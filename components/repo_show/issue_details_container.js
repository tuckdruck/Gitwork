import { connect } from 'react-redux';

import IssueDetails from './issue_details';
import { updateIssue } from '../../actions/issue_actions';


const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};


const mapDispatchToProps = dispatch => {
  return {
    updateIssue: (user, issue, params) => {
      return dispatch(updateIssue(user, issue, params));
    }
  };
};


export default connect(
  mapStateToProps, mapDispatchToProps
)(IssueDetails);
