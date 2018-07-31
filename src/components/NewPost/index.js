import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Header from "./../Navigation/HomeHeader";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import Radio from "@material-ui/core/Radio";
import green from "@material-ui/core/colors/green";
import Icon from "material-ui/Icon";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: 12,
    textAlign: "center",
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  margin: {
    margin: theme.spacing.unit
  }
});

class NewPost extends Component {
  constructor(props) {
    super(props);
    //defining the state to the component
    this.state = {
      propertyType: "",
      username: "",
      password: "",
      uploadedImage: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNewPostButton = e => {
    console.log(this.state.propertyType, this.state);
    this.props.dispatch(newPost(this.state.uploadedImage));
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div style={styles.div}>
          <Paper className={classes.root} elevation={4}>
            <Typography component="p">
              <form noValidate autoComplete="off">
                <div>
                  <Radio
                    checked={this.state.propertyType === "buy"}
                    onChange={this.handleChange}
                    value="buy"
                    name="propertyType"
                    aria-label="A"
                  />{" "}
                  Buy
                  <Radio
                    checked={this.state.propertyType === "rent"}
                    onChange={this.handleChange}
                    value="rent"
                    name="propertyType"
                    aria-label="A"
                    label="rent"
                  />{" "}
                  Rent
                  <Radio
                    checked={this.state.propertyType === "lease"}
                    onChange={this.handleChange}
                    value="lease"
                    name="propertyType"
                    aria-label="A"
                    label="lease"
                  />{" "}
                  Lease
                </div>
                <br />
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Address Line 1"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <br />
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Address Line 2"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <br />
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="City"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <br />
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="State"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <br />
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Zip Code"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <br />
                <input
                  accept="image/*"
                  className={classes.input}
                  id="uploadedImage"
                  type="file"
                  name="uploadedImage"
                  onChange={this.handleChange}
                />
                <div>
                  <Button onClick={this.handleNewPostButton}>
                    Submit Post
                  </Button>
                </div>
              </form>
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

NewPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewPost);
