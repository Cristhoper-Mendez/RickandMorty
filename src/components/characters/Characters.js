import React, { Fragment, useState, useEffect } from "react";
import Character from "./Character";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

const Characters = ({ characters }) => {
  let initialFavourites = JSON.parse(localStorage.getItem("favourites"));

  if (!initialFavourites) {
    initialFavourites = [];
  }
  const [listFavourites, setListFavourites] = useState(initialFavourites);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    if (initialFavourites) {
      localStorage.setItem("favourites", JSON.stringify(listFavourites));
      // console.log("Se crea favourites en LS con la lista");
    }
  }, [listFavourites, initialFavourites]);

  const addFavourite = (favourite) => {
    //devuelve true o false si existe en el erreglo
    const favorito = listFavourites.some((fav) => {
      console.log(fav, favourite);
      return fav === favourite;
    });
    if (favorito) {
      return alertError("Este personaje ya es un favorito.")
    }
    if (listFavourites.length <= 5) {
      return setListFavourites([...listFavourites, favourite]);
    }
    return alertError("Limite de favoritos alcanzado.")
  };
  const alertError = (msg) => {
    setError({
      error: true,
      message: msg,
    });
    setTimeout(() => {
      setError({
        error: false,
        message: msg,
      });
    }, 3000);
  };

  const deleteFavourite = (id) => {
    const newFavourites = listFavourites.filter(
      (favourite) => favourite !== id
    );
    setListFavourites(newFavourites);
  };

  return (
    <Fragment>
      {error.error ? (
        <Alert variant="filled" severity="error" align="center">
          {error.message}
        </Alert>
      ) : null}

      <Grid spacing={3} container justify="center" pas>
        {characters.map((character) => (
          <Grid
            item
            // xs={12}
            key={character.id}
          >
            <Character
              item
              xs={12}
              md={6}
              lg={4}
              // m={0}
              character={character}
              listFavourites={listFavourites}
              addFavourite={addFavourite}
              deleteFavourite={deleteFavourite}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
//
export default Characters;
