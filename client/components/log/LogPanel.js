import React from 'react';
import { connect } from 'redux';
import addLogPanelMessages from '../../actions/logActions';

class LogPanel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.msg.text);
        return(
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        msg: state.props
    }
}
export default connect(mapStateToProps, { addLogPanelMessages })(LogPanel);