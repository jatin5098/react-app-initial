import React from 'react';
import {connect} from 'react-redux';
import request from 'superagent';

// actions
import { changeState } from '../actions/appAction';

class AppComponent extends React.Component {
    constructor() {
        super();
    }
    
    changeRoute = () => {
        console.log(this.props.history);
        // this.props.history.push('/some/path');
    };

    render() {
        return (
            <div>
                <h2>{ this.props.appReducer.component }</h2>
                <h4>{ 'Current Routepath ' + this.props.filter }</h4>
                <button onClick = {() => this.props.changeState()} >Change State</button>
                <button onClick = {() => this.changeRoute()} >Click to Route</button>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        appReducer: state.appReducer,
        filter: ownProps.location.pathname,
        history: ownProps.history
    }
};

const mapDispatchToProp = (dispatch) => {
    return {
        changeState: () => {
            dispatch(changeState());
            //Do some async operation
            request.get("http://date.jsontest.com")
                .end((err, res) => {
                    console.log(res.text);                       
                });
            
        },        
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(AppComponent);