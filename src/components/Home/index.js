import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { getDefaultImages } from "../../redux/actions";
class Home extends Component {
  // this is the first life cycle(LC). LC - 1
  constructor(props) {
    // we are inheriting the props form the parent
    super(props);
    console.log("In constructor");
    //defining the state to the component. State is the object within the component, all the data we want to refer in the component
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    console.log("In home did component", this.props);
    this.props.dispatch(getDefaultImages());
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSingupButton = e => {
    console.log(this.state.username);
    console.log(this.state.password);
  };

  render() {
    console.log("In render method");
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Home</h1>
        </header>
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
    defaultImages: state.Images.defaultImages
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
