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
        //console.log(this.props.auth);
        const { isAuthenticated } = this.props.auth;
        const userLink = (
            <ul className="nav navbar-nav navbar-right">
                <li className = "dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        {this.props.auth.user.userName}
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" id = "nav-user">
                        <li><a href = "#" onClick={this.logout.bind(this)}>Выход</a></li>
                    </ul>

                </li>
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