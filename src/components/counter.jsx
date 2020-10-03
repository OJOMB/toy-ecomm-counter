import React, { Component } from 'react'
import "./counter.css"


export default class Counter extends Component {
    state = {
        valueInputMode: false,
        originalValue: null
    }
    render() {
        var valueTextSpan = (
            <span 
                className={ this.getBadgeClasses() }
                style={ {width:40} }
                min="0"
                onDoubleClick={ this.handleSwitchValueInputMode }
            >
                {this.formatValue()}
            </span>
        )
        var valueTextInput = (
                <input
                    type="number"
                    style={ {width:70} }
                    min="0"
                    defaultValue={this.props.counter.value}
                    onInput={this.handleValueInput}
                    onChange={this.handleValueChange}
                    onDoubleClick={ this.handleSwitchValueInputMode }
                    onKeyDown={this.handleKeyDown}
                    onBlur={this.handleSwitchValueInputMode}
                >
                </input>
        )
        return (
            <div style={ {minWidth:100} }>
                <strong>{ this.props.counter.item + ":"}</strong>
                { this.state.valueInputMode ? valueTextInput : valueTextSpan }
                <button
                    style={ {marginLeft: "10px"} }
                    className="btn btn-sm btn-danger"
                    onClick={ () => this.props.onIncrementCounterValue(this.props.counter.id, -1) }
                >
                    -
                </button>
                <button
                    className="btn btn-sm btn-success"
                    onClick={ () => this.props.onIncrementCounterValue(this.props.counter.id, 1) }
                >
                    +
                </button>
                <button
                    className="btn btn-default btn-sm m-2"
                    onClick={ () => this.props.onDelete(this.props.counter) }
                >
                    DEL
                </button>
            </div>
        );
    };
    getBadgeClasses() {
        let badgeClasses = "badge badge-outline m-2 badge-";
        badgeClasses += this.props.counter.value === 0 ? "warning" : "primary";
        return badgeClasses;
    };
    formatValue() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    };
    handleSwitchValueInputMode = () => {
        this.setState(
            {
                originalValue: this.state.valueInputMode ? null : this.props.counter.value,
                valueInputMode: !this.state.valueInputMode,
            }
        )
    }
    handleValueChange = (e) => {
        this.props.onSetCounterValue(this.props.counter.id, e.target.value);
    };
    handleKeyDown = e => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            this.handleSwitchValueInputMode()
        } else if (e.key === 'Escape' || e.keyCode === 27) {
            this.props.onSetCounterValue(this.props.counter.id, this.state.originalValue)
            this.handleSwitchValueInputMode()
        }
    }
}