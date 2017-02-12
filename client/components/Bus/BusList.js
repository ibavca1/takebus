import React from 'react'
import { connect } from 'react-redux';
import map from 'lodash/map';
import Bus from './Bus';
import { busMessagesRequest, routeMessageRequest } from '../../actions/busActions';


class BusList extends React.Component{
    constructor(props){
        super(props);
        this.state={
             route:{}
        }
        this.props.routeMessageRequest();
    }
    render(){
        const {user} = this.props.auth;
        const {busMessagesRequest} = this.props;
        const {routeMessages} = this.props;

        const options =  map(routeMessages.route, (key, val)=>{
               return <option key = {val} value = {key.route.name}>{key.route.name}</option>
        });

        return (
            <div>
                {user &&
                <select>
                   { options } 
                </select>
                }
            </div>
        )
    }
}

BusList.propTypes = {
    auth: React.PropTypes.object.isRequired,
    busMessagesRequest: React.PropTypes.func.isRequired,
    options: React.PropTypes.object
}

function mapStateToProps(state){
    return {
        messages: state.busMessages,
        routeMessages: state.busMessages,
        auth: state.auth
    }
}

export default connect(mapStateToProps,{busMessagesRequest, routeMessageRequest})(BusList);