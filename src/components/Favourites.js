import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Favourite from "./Favourite";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import Navbar from "./Navbar";

const Favourites = () => {
  let favourites = JSON.parse(localStorage.getItem("favourites"));

  if (!favourites) {
    favourites = [];
  }

  const [listFavourites, setListFavourites] = useState([]);
  const [list, setList] = useState(favourites);
  let listaInicial = favourites.length

  useEffect(() => {
    if (favourites) {
      localStorage.setItem("favourites", JSON.stringify(list));
    }
    
    if (list.length > 0 && list.length === listaInicial) {
      const request = async () => {
        let arreglo = favourites.toString();
        let url = `https://rickandmortyapi.com/api/character/${arreglo}`;
        const res = await Axios.get(url);
        console.log(res.data);
        if (Array.isArray(res.data)) {
          setListFavourites(res.data);
        } else {
          let newData = [];
          newData.push(res.data);
          setListFavourites(newData);
        }
      };
      request();
    }
    // eslint-disable-next-line
  }, [list]);

  const deleteFavourite = (id) => {
    const newList = list.filter((favourite) => favourite !== id);
    setList(newList);

    let newFavourites = listFavourites.filter(
      (favourite) => favourite.id !== id
    );

    setListFavourites(newFavourites);
  };

  return (
    <Grid spacing={3} container justify="center">
      {list.length > 0 ? (
        <Grid item >
          <Typography variant='h2' xs={12}>Your Favourites</Typography>
        </Grid>
      ) : null}
      {/* <Navbar /> */}
      {list.length > 0 ? (
        <Grid spacing={3} container justify="center">
          {listFavourites.map((favourite) => (
            <Grid item key={favourite.id}>
              <Favourite
                item
                xs={12}
                favourite={favourite}
                deleteFavourite={deleteFavourite}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <h1>Aun no tienes favoritos</h1>
      )}
    </Grid>
  );
};

export default Favourites;
