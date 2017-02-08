import React from 'react'
import classnames from 'classnames';


class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({errors: {}});
        this.props.userSignupRequest(this.state).then(
            () => {},
            ({response}) => {
                this.setState({errors: response.data});
            }
        );

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        const {errors} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>
                <div className={classnames("form-group", {"has-error": errors.username})}>
                    <label className="control-label">Username</label>
                    <input 
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input 
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>                                        
                <div className="form-group">
                    <label className="control-label">Password confirmation</label>
                    <input 
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                    />                                        
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-lg">
                            Sign up
                        </button>
                    </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;



