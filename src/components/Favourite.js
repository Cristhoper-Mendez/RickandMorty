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
  favourite,
  deleteFavourite
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
          image={favourite.image}
          title={favourite.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {favourite.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Especie: {favourite.species}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Number of episodes appears: {favourite.episode.length}
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {favourite.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button
            size="small"
            color="primary"
            onClick={() => deleteFavourite(favourite.id)}
            endIcon={<FavoriteIcon />}
          >
            Dislike
          </Button>
      </CardActions>
    </Card>
  );
}
