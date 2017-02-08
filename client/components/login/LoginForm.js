import React from 'react'
import classnames from 'classnames';
import TextFieldGroup from '../TextFieldGroup';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/loginActions';


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        identifier: '',
        password: '',
        errors: {},
        isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({errors: {}});
        //console.log(this.state);
        this.props.userLoginRequest(this.state).then(
            (res) => {
                console.log(this.state);
                this.context.router.push('/');
            },
            (err) => {
                //console.log(err);
                //this.setState({ errors: err.response.data.errors, isLoading: false });
            }
        );
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        const {errors, identifier, password, isLoading} = this.state;
        //console.log(this.state);
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <TextFieldGroup 
                    field="identifier"
                    label="User name / email"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                />
                <TextFieldGroup 
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />
                <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { userLoginRequest })(LoginForm);



