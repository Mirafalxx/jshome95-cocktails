import React, { useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import CockTailItem from './CockTailItem';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktailsRequest } from '../../store/actions/cocktailsActions';

// const useStyles = makeStyles((theme) => ({
//   progress: {
//     height: 200,
//   },
// }));
const Cocktails = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector((state) => state.cocktails.cocktails);
  console.log(cocktails);
  useEffect(() => {
    dispatch(fetchCocktailsRequest());
  }, [dispatch]);
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
        {cocktails.map((cocktail) => (
          <CockTailItem
            key={cocktail._id}
            id={cocktail._id}
            title={cocktail.title}
            author={cocktail.user.displayName}
            published={cocktail.published}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Cocktails;
