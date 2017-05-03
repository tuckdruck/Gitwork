import React from 'react';
import Modal from 'react-modal';

import NewIssueForm from './new_issue_form';


export default class IssueModal extends React.Component {


  constructor(props) {
    super(props);
    this.state = { modalOpen: false };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentWillMount() {
    Modal.setAppElement('body');
  }


  showModal() {
    this.setState({ modalOpen: true });
  }


  closeModal() {
    this.setState({ modalOpen: false });
  }


  styles() {
    return {
      overlay: { backgroundColor: 'rgba(24, 24, 24, 0.75)' },
      content: { top: '20%', left: '24%', right: '24%', bottom: '20%' }
    };
  }


  newIssueForm() {
    return(
      <NewIssueForm repo={this.props.repo}
                    closeModal={this.closeModal}
      />
  );
  }


  modal() {
    return(
      <Modal  isOpen={this.state.modalOpen} contentLabel="Review"
              onRequestClose={this.closeModal} style={this.styles()}
              shouldCloseOnOverlayClick={true}
      >
        {this.newIssueForm()}
      </Modal>
    );
  }


  render() {
    return(
      <div>
        <button className="new-issue" onClick={this.showModal}>New issue
        </button>
        { this.state.modalOpen ? this.modal() : "" }
      </div>
    );
  }

}
