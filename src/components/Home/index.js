import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { getDefaultImages } from "../../redux/actions";
import ImageGrid from "./ImageComponent/ImageGrid";
class Home extends Component {
  // this is the first life cycle(LC). LC - 1
  constructor(props) {
    // we are inheriting the props form the parent
    super(props);
    //defining the state to the component. State is the object within the component, all the data we want to refer in the component
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this.props.dispatch(getDefaultImages());
  }

  handleImageClick = e => {
    console.log("You clicked me", e);
  };

  // static getDerivedStateFromProps(props) {
  //   if (props.defaultImages) {
  //     console.log("In get derived state from props--props", props);
  //   }
  // }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Home</h1>
        </header>
        <div className={classes.imageCardContainer}>
          {this.props.defaultImages &&
            this.props.defaultImages.resources.map(resource => (
              <ImageGrid
                key={resource.public_id}
                imageData={resource}
                onClick={this.handleImageClick}
              />
            ))}
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
  }),
  imageCardContainer: {
    cursor: "pointer",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    defaultImages: state.Images.defaultImages
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
