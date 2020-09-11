import React, { Fragment, useState, useEffect } from "react";
import Character from "./Character";
import Grid from "@material-ui/core/Grid";
import Alert from '@material-ui/lab/Alert';

const Characters = ({ characters }) => {

  let initialFavourites = JSON.parse(localStorage.getItem("favourites"));

  if (!initialFavourites) {
    initialFavourites = [];
  }
  const [listFavourites, setListFavourites] = useState(initialFavourites);
  const [error, setError] = useState(false)

  useEffect(() => {
    if (initialFavourites) {
      localStorage.setItem("favourites", JSON.stringify(listFavourites));
      // console.log("Se crea favourites en LS con la lista");
    }
  }, [listFavourites, initialFavourites]);

  const addFavourite = (favourite) => {
    if(listFavourites.length <= 5){
      setListFavourites([...listFavourites, favourite]);
    } else {
      setError(true)
      const alertError = () => {
        setTimeout(() => {
          setError(false)
        }, 2000)
      }
      alertError()
    }
  };

  const deleteFavourite = (id) => {
    const newFavourites = listFavourites.filter(
      (favourite) => favourite.id !== id
    );
    setListFavourites(newFavourites);
  };

  return (
    <Fragment>
      {
        error ?  <Alert variant='filled' severity="error">Maximun of Favourites 5!</Alert>
              : null
      }
      
      <Grid spacing={3} container justify="center">
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
