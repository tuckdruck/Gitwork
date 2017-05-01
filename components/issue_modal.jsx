import React from 'react';
import NewIssueForm from './new_issue_form';
import Modal from 'react-modal';

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

  render() {
    let modal = "";
    if (this.state.modalOpen) {
      modal = (
        <Modal  isOpen={this.state.modalOpen} contentLabel="Review"
                onRequestClose={this.closeModal}
                shouldCloseOnOverlayClick={true}
        >
        <NewIssueForm repo={this.props.repo} closeModal={this.closeModal} />
        </Modal>
      );
    }

    return(
      <div>
        <button onClick={this.showModal}>New issue</button>
        {modal}
      </div>
    );
  }
}
