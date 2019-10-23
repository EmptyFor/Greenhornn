import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Provider extends Component {

  render () {

    return (
      <Fragment>
        { this.props.children }
      </Fragment>

    )
  }
}

export default connect()(Provider);
