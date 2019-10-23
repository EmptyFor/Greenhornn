import React, { Component } from 'react';
import './index.scss';


export default class Input extends Component {




    render() {
        return (
                <div className="input-wrapp">
                    <input validation={this.props.validation} className={`default-input ${this.props.className}`} onChange={this.props.onChange} onFocus={this.props.onFocus} onBlur={this.props.onBlur} placeholder={this.props.placeholder} />
                {this.props.validation !== '' ? <label className="input-label">{this.props.validation}</label> : null}
                </div>
        )

    }
}

