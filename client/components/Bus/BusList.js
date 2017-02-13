import React from 'react'
import { connect } from 'react-redux';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import Bus from './Bus';
import { busMessagesRequest, routeMessageRequest } from '../../actions/busActions';
import ComboFieldGroup from '../ComboFieldGroup';


class BusList extends React.Component{
    constructor(props){
        super(props);
        this.state={
             route:{}
        }
        this.onChange = this.onChange.bind(this);
        this.props.routeMessageRequest();
    }
    onChange(e){
        //e.preventDefault();
        console.log(e);
    }
    render(){
        const {user} = this.props.auth;
        const {busMessagesRequest} = this.props;
        const {routeMessages} = this.props;

        const options =  map(routeMessages.route, (key, val)=>{
               return <option key = {key.id} value = {key.route.name}>{key.route.name}</option>
        });
        //console.log(options);
        return (
            <div>
                {!isEmpty(user) ?
                    <ComboFieldGroup options={options} label="Выберите маршрут:" onChange={this.onChange} />:
                    <a href="#">You not login.</a>
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