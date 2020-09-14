import { React, Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

class Home extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render () {
        const { isLoggingOut, logoutError } = this.props;

        return (
            <div>
                <h1>This is a PRotected aRea. </h1>
                <p>This means this area is safely routed thus only after successful validation of required credentials someone is allowed to enter this PAGE. Else This page is NOT Accesssible</p>
                <button onClick = { this.handleLogout }> Logout </button>
                {isLoggingOut && <p>You are Logging Out</p>}
                {logoutError && <p>Error Logging Out. Please perform the action again</p>}
            </div>
        );
    }

}

function mapStateToProps (state) {
    return {
        isLoggingOut : state.auth.isLoggingOut,
        logoutError : state.auth.logoutError
    };
}

export default connect(mapStateToProps) (Home);
