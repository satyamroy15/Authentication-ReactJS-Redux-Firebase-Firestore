import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions";
import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const styles = () => ({
    "@global": {
        body: {
            backgroundColor: "#fff"
        }
    },
    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f50057"
    },
    form: {
        marginTop: 1
    },
    errorText: {
        color: "#f50057",
        marginButtom: 5,
        textAlign: "center"
    }
});

class Login extends Component {
    state = { email: "", password: ""};

    handleEmailChange = ({ target }) => {
        this.setState({ email: target.value });
    };

    handlePasswordChange = ({ target }) => {
        this.setState({ password: target.value });
    };

    handleSubmit = () => {
        const { dispatch } = this.props;
        const { email, password } = this.state;

        dispatch(loginUser(email, password));
    };


render() {
    const { classes, loggingError, isAuthenticated } = this.props;
    if ( isAuthenticated ) {
        return <Redirect to = "/" />;
    } else {
        return (
        // login component
            <Container Component = "main" maxWidth="xs">
                <Paper className={classes.paper}>
                    <Avatar className = {classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component = "h1" variant = "h5">
                        Sign in
                    </Typography>
                    <TextField
                        variant = "outlined"
                        margin = "normal"
                        fullWidth
                        id = "email"
                        name = "email"
                        label = "Email Address"
                        onChange = {this.handleEmailChange}
                    />

                    <TextField
                        variant = "outlined"
                        margin = "normal"
                        fullWidth
                        name = "password"
                        id = "password"
                        label = "Password"
                        type = "password"
                        onChange = {this.handlePasswordChange}
                    />

                    {loggingError && (
                        <Typography component = "p" className = {classes.errorText} >
                            Incorrect Email or Password.
                            </Typography>
                    )}
                    <Button
                        type = "button"
                        color = "Primary"
                        variant = "contained"
                        fullWidth
                        className = {classes.submit}
                        onClick={this.handleSubmit}
                    >
                        Sign In
                    </Button>
                </Paper>
            </Container>
        );
    }
}
}



function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loggingError: state.auth.loggingError,
        isAuthenticated: state.auth.isAuthenticated
    };
}
export default withStyles(styles)(connect(mapStateToProps)(Login));