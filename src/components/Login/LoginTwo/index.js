import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import RectangleButton from '../../common/Buttons/RectAngleBtn';
import Input from '../../../components/common/Input'
import links from '../../../config/links'

// import './index.scss';
import * as homePage from '../../../assets/images/HomePage.png';
import * as loginOneImg from '../../../assets/images/greenhorn_hero-02.png';

class LoginTwo extends Component {

    state = {

    }
    emailValidation = () => {

    }

    render() {

        return (
            <Fragment>
                <div className="start-wrapper" style={{ flexDirection: 'row', background: 'black' }}>
                    <div className="login-left-img" style={{ height: '100%' }}><img style={{ width: '100%', height: '100%' }} alt="" src={loginOneImg} />  </div>
                    <div className="start-main-info ">
                        <div className="start-main-info-big">
                            <img style={{ width: '100%' }} alt="" src={homePage} />
                        </div>
                        <div className="start-main-info-btns">
                            <Input placeholder="E-mail (will be your username)" />
                            <Link to={links.login_three}><RectangleButton className="default-btn" text="continue" /></Link>
                        </div>
                    </div>

                </div>



            </Fragment>
        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(LoginTwo);
