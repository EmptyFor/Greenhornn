import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// import { bindActionCreators } from 'redux';

import RectangleButton from '../common/Buttons/RectAngleBtn';

import './index.scss';
import './index.media.scss';
import * as arrow from '../../assets/images/arrow1.png';

class StartPage extends Component {

    render() {

        return (
            <Fragment>
                <div className="start-wrapper">
                    <div className="start-main-info">
                        <div className="start-main-info-big">
                            <div className="start-main-image">
                                <img style={{ width: '100%' }} alt="" src={arrow} />
                            </div>
                            <div className="start-main-texts">
                                <Link><span className="text-up">Get your game up!</span></Link>
                                <span className="text-down">Greenhorn</span>
                            </div>
                        </div>


                        <div className="start-main-info-btns">
                            <a href="https://www.apple.com/ios/app-store/"><RectangleButton width="120px" platform="ios" text="App Store" /></a>
                            <a href="https://play.google.com"><RectangleButton platform="google" text="Google Play" /></a>
                        </div>

                    </div>
                    <div className="under-bg"></div>
                </div>
            </Fragment>
        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(StartPage);
