import React from "react";

import AppBar from "material-ui/AppBar";
import Button from "material-ui/Button";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography style={styles.typography} variant="title" color="inherit">
            <Button>
              <Link
                style={styles.sign}
                to={{
                  pathname: "/home"
                }}
              >
                Real Estate
              </Link>
            </Button>
          </Typography>
          <Typography variant="title">
            <Button>
              <Link
                style={styles.sign}
                to={{
                  pathname: "/newPost"
                }}
              >
                New Post{" "}
              </Link>{" "}
            </Button>{" "}
            <Button>
              <Link
                style={styles.sign}
                to={{
                  pathname: "/login"
                }}
              >
                Log Out{" "}
              </Link>{" "}
            </Button>{" "}
          </Typography>{" "}
        </Toolbar>{" "}
      </AppBar>{" "}
    </div>
  );
}

const styles = {
  root: {
    flexGrow: 1
  },
  typography: {
    flex: 1,
    textAlign: "left"
  },
  sign: {
    color: "white",
    textDecoration: "none",
    marginLeft: "10px"
  }
};

export default Header;
