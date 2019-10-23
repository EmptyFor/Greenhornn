import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'

import RectangleButton from '../../common/Buttons/RectAngleBtn';
import Input from '../../../components/common/Input'
import links from '../../../config/links'
import { regexps } from '../../../config/constants'
// import './index.scss';
import * as homePage from '../../../assets/images/HomePage.png';
import * as loginOneImg from '../../../assets/images/greenhorn_hero@2x.png';

class LoginOne extends Component {

    state = {
        name: '',
        validation: '',
        redir: false
    }

    loginValidation = () => {

        return this.state.validation.length === 0 ? this.setState({ validation: 'Please enter your Full Name!' }) :
            regexps.name.test(this.state.name) && this.state.validation.length > 0? this.setState({redir: true}) : this.setState({ validation: 'Please tap correct Full Name!' });
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })

    }

    render() {
        const { validation, redir } = this.state;

        if(redir){
            return <Redirect to={links.login_two}/>
        }
        
        return (
            <Fragment>
                <div className="start-wrapper" style={{ flexDirection: 'row', background: 'black' }}>
                    {/* <div className="" style={{ height: '100%' }}><img style={{ width: '100%', height: '100%' }} alt="" src={loginOneImg} />  </div> */}
                    <div className="login-left-img" style={{ height: '100%' }}><img style={{ width: '100%', height: '100%' }} alt="" src={loginOneImg} />  </div>
                    <div className="start-main-info ">
                        <div className="start-main-info-big">
                            <img style={{ width: '100%' }} alt="" src={homePage} />
                        </div>
                        <div className="start-main-info-btns">
                            <Input placeholder="Full Name" validation={validation} onChange={this.handleChange} />
                            {/* <Link to={links.login_two}> */}
                            <RectangleButton onClick={this.loginValidation} className="default-btn" text="continue" />
                            {/* </Link> */}
                        </div>
                    </div>

                    {/* <div className="rectangle-bg" /> */}
                </div>



            </Fragment>
        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(LoginOne);
