import React, { Component } from "react";
import "../../App.css";

import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "material-ui/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";

import { loginUser, googleLogin, getDefaultImages } from "../../redux/actions";
import Header from "../Navigation/Header";

class Login extends Component {
  constructor(props) {
    super(props);
    //defining the state to the component
    this.state = {
      username: "",
      password: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isUserLoggedIn) {
      props.history.push("/home");
    }
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log("In component will receive props");
  //   console.log("props", this.props);
  //   console.log("Next props", nextProps);
  //   if (nextProps.isUserLoggedIn) {
  //     this.props.history.push("/home");
  //   }
  // }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLoginButton = e => {
    this.props.dispatch(loginUser(this.state.username, this.state.password));
  };

  render() {
    const { classes } = this.props;

    const responseGoogle = response => {
      console.log(response);
    };

    const responseFacebook = response => {
      console.log("facebook login");
      console.log(response);
      //anything else you want to do(save to localStorage)...
    };

    return (
      <div className="App">
        <Header />
        <div style={styles.div}>
          <Paper className={classes.root} elevation={4}>
            <Typography component="p">
              <form noValidate autoComplete="off">
                <TextField
                  required
                  name="username"
                  label="Email Id"
                  type="email"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  margin="normal"
                  errorText={this.state.usernameError}
                />
                <br />
                <TextField
                  required
                  name="password"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  margin="normal"
                />
                <br />
                <div>
                  <Button onClick={this.handleLoginButton}>Login</Button>
                  <GoogleLogin
                    clientId="77000656723-h1ha664aluasd8tb933841696onumigc.apps.googleusercontent.com"
                    buttonText="Login With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  />
                </div>
              </form>
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 13,
    paddingLeft: 12
  })
});

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.Auth.isUserLoggedIn,
    userObject: state.Auth.userObject
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Login));
