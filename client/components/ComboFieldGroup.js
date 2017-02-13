import React from 'react'

class ComboFieldGroup extends React.Component {
    
    render(){
        //console.log(this.props.options);
        return(
            <div className = "form-group">
               <label className = "control-label">{this.props.label}</label>
               <select className="form-control" onChange={this.props.onChange}>
                   {this.props.options}
               </select>
            </div>
        )
    }
}

export default ComboFieldGroup