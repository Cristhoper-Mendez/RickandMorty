import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    maxWidth: "1000px",
  },
}));

export default function PaginationRounded({
  pages,
  actualPage,
  setActualPage,
}) {
  const classes = useStyles();

  const cambiarPagina = (e, value) => {
    // console.log(value);
    setActualPage(value);
  };

  return (
    <Grid container spacing={3} justify="center">
      <Grid item>
        <Pagination
          defaultPage={1}
          page={actualPage}
          color="primary"
          onChange={cambiarPagina}
          className={classes.pagination}
          count={pages}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </Grid>
    </Grid>
  );
}
