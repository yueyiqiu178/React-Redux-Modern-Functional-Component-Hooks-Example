import React, { Component } from "react"
import PropTypes from 'prop-types';

class TextAreaCounter extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired
    };

    static defaultProps = {
        text: ""
    };

    constructor(props) {
        console.log("constructor");
        super(props);
        this.state =
        {
            iText: this.props.text,
        }
    };

    _textChange(ev) {
        this.setState({
            iText: ev.target.value,
        });
    }

    _log(methodName, args) {
        console.log(methodName, args);
    }

    //unsafe
    // componentWillReceiveProps() {
    //     this._log('componentWillReceiveProps', arguments);
    // }

    //unsafe
    // componentWillMount() {
    //     this._log('componentWillMount', arguments);
    // }

    //unsafe
    // componentWillUpdate() {
    //     this._log('componentWillUpdate', arguments);
    // }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    //before render
    shouldComponentUpdate(nextProps, nextState) {
        this._log('shouldComponentUpdate', arguments);
        return true;
    }

    //after render


    //before update dom and state
    getSnapshotBeforeUpdate(){
        this._log('getSnapshotBeforeUpdate', arguments);
        return null;
    }

    //update dom and state

    componentDidUpdate() {
        this._log('componentDidUpdate', arguments);
    }


    componentDidMount() {
        this._log('componentDidMount', arguments);
    }

    componentWillUnmount() {
        this._log('componentWillUnmount', arguments);
    }

    render() {
        console.log("render")
        return <div>
            <textarea value={this.state.iText} onChange={this._textChange.bind(this)}></textarea>
            <h1>{this.state.iText.length}</h1>
        </div>
    }
}

export default TextAreaCounter