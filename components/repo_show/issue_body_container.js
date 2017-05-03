import { connect } from 'react-redux';
import IssueBody from './issue_body';

const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateIssue: (user, issue, params) => { dispatch(updateIssue(user, issue, params)); }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(IssueBody);
