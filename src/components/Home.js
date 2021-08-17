import React, { Fragment, useEffect, useContext, useState } from "react";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

import Footer from "./Footer";
import Characters from "./characters/Characters";
import Navbar from "./Navbar";
import CharacterContext from "../Context/CharacterContext";

const Home = () => {
  const {
    characters,
    parameters,
    pages,
    actualPage,
    setCharacters,
    setParameters,
    setPages,
    setActualPage,
  } = useContext(CharacterContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      const url = `https://rickandmortyapi.com/api/character/?name=${parameters}&page=${actualPage}`;
      const res = await axios.get(url);
      // console.log(res);

      setPages(res.data.info.pages);
      setCharacters(res.data.results);

      setLoading(false);
    };

    request();
    //eslint-disable-next-line
  }, [parameters, actualPage]);

  return (
    <Fragment>
      <Navbar
        setParameters={setParameters}
        parameters={parameters}
        setActualPage={setActualPage}
      />

      <Typography variant="h3" color="initial" align="center">
        Rick and Morty Characters
      </Typography>

      <Grid container justify="center">
        {loading ? (
          <Grid item>
            <CircularProgress disableShrink size={80} />
          </Grid>
        ) : (
          <Grid>
            <Characters characters={characters} />
          </Grid>
        )}
      </Grid>

      {loading ? null : (
        <>
          <br />
          <Footer
            pages={pages}
            setActualPage={setActualPage}
            actualPage={actualPage}
          />
        </>
      )}
    </Fragment>
  );
};

export default Home;
