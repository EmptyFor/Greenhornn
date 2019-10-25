import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import links from '../../config/links'
import RectangleButton from '../common/Buttons/RectAngleBtn'
import AnimatedBg from '../../assets/animation/AnimatedBg';

import './index.scss';
import * as homePage from '../../assets/images/HomePage.png';
import * as bullhorn from '../../assets/icons/bullhorn.png'
import * as magnifying_glass from '../../assets/icons/open-magnifying-glass.png'
import * as globe_americas from '../../assets/icons/globe-americas.png'

class Register extends Component {

    state = {
        pos: '0',
        disover: '#4bbc87',
        connect: '#ffffff',
        win: '#ffffff',

    }

    transitionSlide = (e) => {
        e.currentTarget.id === 'discover' ? this.setState({ pos: '0', disover: '#4bbc87', connect: '#ffffff', win: '#ffffff' }) :
            e.currentTarget.id === 'connect' ? this.setState({ pos: '33.4%', disover: '#ffffff', connect: '#4bbc87', win: '#ffffff' }) : this.setState({ pos: '67%', disover: '#ffffff', connect: '#ffffff', win: '#4bbc87' })
    }

    render() {
        const { pos, disover, connect, win } = this.state;

        return (
            <Fragment>
                <AnimatedBg />
                <div className="start-wrapper">
                    <div className="start-main-info">
                        <div className="start-main-info-big">
                            <img style={{ width: '100%' }} alt="" src={homePage} />
                        </div>

                        <div className="start-main-info-btns">
                            <RectangleButton className="register-sign-up-btn" text="SIGN-UP" />
                            <Link to={links.login_one}><RectangleButton className="register-sign-in-btn" text="SIGN-IN" /></Link>
                        </div>

                        <div className="register-nav-panel">
                            <div onClick={this.transitionSlide} id="discover" className="nav-panel">
                                <img alt="" src={magnifying_glass} />
                                <span style={{ color: disover, transition: '.9s' }}>Discover</span>
                            </div>
                            <div onClick={this.transitionSlide} id="connect" className="nav-panel">
                                <img alt="" src={globe_americas} />
                                <span style={{ color: connect, transition: '.9s' }}>Connect</span>
                            </div>
                            <div onClick={this.transitionSlide} id="win" className="nav-panel">
                                <img alt="" src={bullhorn} />
                                <span style={{ color: win, transition: '.9s' }}>Win</span>
                            </div>

                            <span className="nav-bar-slider" style={{ left: pos }}></span>
                        </div>
                    </div>
                    <div className="under-bg" ></div>
                </div>
            </Fragment>
        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(Register);
