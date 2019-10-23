import React, { Component } from 'react';
import './index.scss';
import './index.media.scss';
import * as google_play_img from '../../../../assets/icons/Shape.png';
import * as apple_img from '../../../../assets/icons/apple.png';

export default class RectangleButton extends Component {

    state = {
        img_platform: ''
    }

    componentWillMount = () => {
        return this.props.platform === 'google' ? this.setState({ img_platform: google_play_img }) : this.setState({ img_platform: apple_img })
    }

    render() {
        const { img_platform } = this.state
        return (
            <div onClick={this.props.onClick} className={`rectangle-btn ${this.props.className}`} style={{ width: this.props.width }} platform={this.props.platform}>
                {this.props.platform ? <img alt="" src={img_platform} /> : null} 
                {this.props.text}
            </div>
        )
    }
}

