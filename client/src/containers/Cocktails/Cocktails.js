import React from 'react';
import { Button, Grid } from '@material-ui/core';
import CockTailItem from './CockTailItem';
import { Link } from 'react-router-dom';
const Cocktails = () => {
  // const useStyles = makeStyles((theme) => ({
  //   progress: {
  //     height: 200,
  //   },
  // }));

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justify="space-between" alignItems="center">
        <Grid item>
          <Button color="primary" component={Link} to="/new-cocktail">
            Add Cocktail
          </Button>
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        <CockTailItem />
      </Grid>
    </Grid>
  );
};

export default Cocktails;
