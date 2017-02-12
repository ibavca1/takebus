import React from 'react'
import classnames from 'classnames';
import TextFieldGroup from '../TextFieldGroup';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/loginActions';
import { addLogPanelMessages } from '../../actions/logActions';


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
        this.props.userLoginRequest(this.state).then(
            (res) => {
                this.props.addLogPanelMessages({
                    type: '200',
                    text: 'Welcome.'
                });
                this.context.router.push('/');
            },
            (err) => {
                this.setState({ errors: err.response.data.errors, isLoading: false });
            }
        );
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        const {errors, identifier, password, isLoading} = this.state;
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
                {errors && <span className="help-block">{errors.form}</span>}
                <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired,
    addLogPanelMessages: React.PropTypes.func
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, {userLoginRequest, addLogPanelMessages})(LoginForm);



