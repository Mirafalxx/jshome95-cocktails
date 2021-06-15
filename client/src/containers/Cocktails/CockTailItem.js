import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { CardMedia, makeStyles } from '@material-ui/core';

import imageNotAvailable from '../../assets/images/imageNotAvailable.png';
import { apiURL } from '../../config';

const useStyles = makeStyles({
  card: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

const CockTailItem = ({ title, image, id }) => {
  const classes = useStyles();

  let cardImage = imageNotAvailable;

  if (image) {
    cardImage = apiURL + '/' + image;
  }

  return (
    <Grid item xs sm md={6} lg={4}>
      <Card className={classes.card}>
        <CardHeader title={title} />
        <CardMedia image={cardImage} title={title} className={classes.media} />
        <CardActions>
          <IconButton component={Link} to={'/' + id}>
            <ArrowForwardIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

CockTailItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};

export default CockTailItem;
