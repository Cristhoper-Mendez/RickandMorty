import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
  },
  media: {
    height: "100%",
    paddingTop: "10px",
  },
});

export default function ImgMediaCard({
  character,
  addFavourite,
  deleteFavourite,
  listFavourites,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          alt="Contemplative Reptile"
          height="140"
          image={character.image}
          title={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Especie: {character.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Number of episodes appears: {character.episode.length}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {character.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {listFavourites.some((fav) => fav === character.id) ? (
          <Button
            size="large"
            color="secondary"
            onClick={() => deleteFavourite(character.id)}
            variant="contained"
            endIcon={<FavoriteIcon />}
          >
            unlike
          </Button>
        ) : (
          <Button
            size="large"
            color="primary"
            onClick={() => addFavourite(character.id)}
            variant="contained"
            endIcon={<FavoriteBorderIcon />}
          >
            Like
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
