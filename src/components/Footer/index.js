import React, { Component } from 'react';
import { connect } from 'react-redux';
import RectangleButton from '../common/Buttons/RectAngleBtn'
import * as facebook_ico from '../../assets/icons/facebook.png'
import * as instagram_ico from '../../assets/icons/instagram.png'
import * as twitter_ico from '../../assets/icons/twitter.png'
// import { bindActionCreators } from 'redux';
import './index.scss';
import './index.media.scss'


class Footer extends Component {

    render() {

        return (
            <footer >
                <div className="footer-navigation-links">
                    <span>Our Story</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>

                <div className="footer-main-interactive-panel">
                    <span style={{ fontFamily: 'Roboto' }}>Download Greenhorn App Today!</span>
                    <div className="footer-btn-group">
                        <a href="https://www.apple.com/ios/app-store/"><RectangleButton className="footer-btns" width="120px" platform="ios" text="App Store" /></a>
                        <a href="https://play.google.com"><RectangleButton className="footer-btns" platform="google" text="Google Play" /></a>
                    </div>

                    <div className="footer-social-links">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com"><img alt="" src={facebook_ico} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com"><img alt="" src={instagram_ico} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com"><img alt="" src={twitter_ico} /></a>
                    </div>
                </div>

            </footer>
        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(Footer);
