import React from 'react';

import NewIssueForm from './new_issue_form';


export default class IssueModal extends React.Component {


  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  modal() {
    return(
      <div className="modal">
        {this.newIssueForm()}
      </div>
    );
  }


  render() {
    let modal = "";
    let modalScreen = "";
    if (this.state.modalOpen) {
      modal = (<NewIssueForm closeModal={this.closeModal} repo={this.props.repo}/>)
      modalScreen = (<div className="modal-screen"></div>)
    }

    return(
      <div>
        <button className="new-issue" onClick={this.openModal}>New issue
        </button>
        {modal}
        {modalScreen}
      </div>
    );
  }

}
