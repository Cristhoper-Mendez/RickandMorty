import React, { Fragment, useEffect, useContext} from "react";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
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
  useEffect(() => {
    const request = async () => {
      const url = `https://rickandmortyapi.com/api/character/?name=${parameters}&page=${actualPage}`;
      const res = await axios.get(url);
      // console.log(res);

      setPages(res.data.info.pages);
      setCharacters(res.data.results);
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

      <Characters characters={characters} />

      <Footer
        pages={pages}
        setActualPage={setActualPage}
        actualPage={actualPage}
      />
    </Fragment>
  );
};

export default Home;
