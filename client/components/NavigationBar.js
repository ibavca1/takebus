import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userLogoutRequest } from '../actions/loginActions';

class NavigationBar extends React.Component{
    constructor(props){
        super(props);
    }
    logout(e){
        e.preventDefault();
        this.props.userLogoutRequest();
    }
    render(){ 
        const { isAuthenticated } = this.props.auth;
        const userLink = (
            <ul className="nav navbar-nav navbar-right">
                <li><a href = "#" onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
        );
        const guestLink = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to = "/signup">Sign in</Link></li>
                <li><Link to = "/login">Login</Link></li>
            </ul>
        );
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to = "/" className="navbar-brand">Takebus</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        { isAuthenticated ? userLink : guestLink }
                    </div>
                </div>
            </nav>
        )
    }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  userLogoutRequest: React.PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { userLogoutRequest })(NavigationBar);