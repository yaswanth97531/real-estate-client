import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    margin: "3%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

function ImageGrid(props) {
  const { classes, imageData, imageClick } = props;
  return (
    <div
      className={classes.imageCardContainer}
      onClick={() => imageClick(imageData)}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={imageData.secure_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard{" "}
          </Typography>{" "}
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,
            000 species, ranging across all continents except Antarctica{" "}
          </Typography>{" "}
        </CardContent>{" "}
        <CardActions>
          <Button size="small" color="primary">
            Share{" "}
          </Button>{" "}
          <Button size="small" color="primary">
            Learn More{" "}
          </Button>{" "}
        </CardActions>{" "}
      </Card>{" "}
    </div>
  );
}

ImageGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGrid);
