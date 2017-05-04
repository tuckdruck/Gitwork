import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import SignInForm from './sign_in_form';

const gitworkText = `Gitwork is an application for accessing your
Github profile information and repositories, and managing your
issues. It is built on top of the Github API.`;


const gitworkDescription = () => {
  return(
    <div className="promo">
      <h1>Built for developers.</h1>
      <p>{gitworkText}</p>
    </div>
  );
};


const SignInPage = ({ errors }) => {
  return(
    <main className="landing">
      {gitworkDescription()}
      <div className="login">
        <div className="errors">{errors}</div>
        <SignInForm />
      </div>
    </main>
  );
};


const mapStateToProps = state => {
  return {
    errors: state.session.errors
  };
};


export default connect(mapStateToProps, null)(SignInPage);
