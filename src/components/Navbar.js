import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import Grid from "@material-ui/core/Grid";
import { Link, withRouter } from "react-router-dom";
import CharacterContext from "../Context/CharacterContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    flexGrow: 1,
  },
  input: {
    flexGrow: 7,
  },
  color: {
    color: "#DC143C",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const Navbar = (props) => {
  console.log(props.location.pathname);
  const {
    parameters,
    setParameters,
    setActualPage,
  } = useContext(CharacterContext);

  const classes = useStyles();

  const [character, saveCharacter] = useState("");
  const [error, setError] = useState(false);

  const searchCharacter = () => {
    if (character.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setParameters(character);
    setActualPage(1);
  };

  const clearSearch = () => {
    setParameters("");
    saveCharacter("");
    setActualPage(1);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              {props.location.pathname === "/" ? (
                <Button color="inherit" onClick={() => setParameters("")} size="large" className={classes.button}>
                  <Link to={"/favourites"} className={classes.link}>
                    Favourites
                  </Link>
                </Button>
              ) : (
                <Button color="inherit" onClick={() => setParameters("")} size="large" className={classes.button}>
                  <Link to={"/"} className={classes.link}>
                    Home
                  </Link>
                </Button>
              )}

              <TextField
                label="Search a character"
                value={character}
                onChange={(e) => saveCharacter(e.target.value)}
                className={classes.input}
              />
              <Button
                color="inherit"
                startIcon={<SearchIcon />}
                onClick={() => searchCharacter()}
                size="large"
              >
                Search
              </Button>
              {parameters.trim() !== "" ? (
                <Button
                  color="inherit"
                  startIcon={<ClearIcon />}
                  onClick={() => clearSearch()}
                  className={classes.button}
                  size="large"
                >
                  Clear Search
                </Button>
              ) : null}
            </Toolbar>
          </AppBar>
          {error ? (
            <Typography className={classes.color} align="center" variant="h4">
              Introduce un nombre valido
            </Typography>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(Navbar);
