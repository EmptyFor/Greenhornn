import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
// import { bindActionCreators } from 'redux';

class App extends Component {

  render () {

    return (
      <Fragment>
        { this.props.children }
        <Footer />
      </Fragment>
    )
  }
}

export default connect()(App);
