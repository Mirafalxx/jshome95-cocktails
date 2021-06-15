import { Grid, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import FormElement from '../../components/UI/Form/FormElement';
import FileInput from '../../components/UI/Form/FileInput';

const NewCocktail = () => {
  const [state, setState] = useState({
    title: '',
    recipe: '',
    image: '',
    ingredients: [{ title: '', amount: '' }],
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const fileChangeHandler = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];

    setState((prevState) => ({
      ...prevState,
      [name]: file,
    }));
  };
  const changeIngredient = (i, name, value) => {
    setState((prev) => {
      const ingCopy = {
        ...prev.ingredients[i],
        [name]: value,
      };

      const a = prev.ingredients.map((ing, index) => {
        if (index === i) {
          return ingCopy;
        }
        return ing;
      });

      return { ...prev, ingredients: a };
    });
  };

  const addIngredient = () => {
    setState((prev) => {
      const ingredients = [...prev.ingredients];
      const newIngredients = [...ingredients, { title: '', amount: '' }];

      return { ...prev, ingredients: newIngredients };
    });
  };

  const deleteIngredient = (index) => {
    setState((prev) => {
      const ingredients = [...prev.ingredients];

      ingredients.splice(index, 1);

      return { ...prev, ingredients };
    });
  };

  return (
    <Grid container spacing={2} direction="column" component="form">
      <Typography variant="h3">Add new Cocktail</Typography>
      <Grid item>
        <FormElement required label="Title" name="title" value={state.title} onChange={inputChangeHandler} />
      </Grid>
      <Grid item>
        {state.ingredients.map((ing, i) => (
          <Grid item container key={i} spacing={2}>
            <FormElement label="title" name="title" onChange={(e) => changeIngredient(i, 'title', e.target.value)} />
            <FormElement label="amount" name="amount" onChange={(e) => changeIngredient(i, 'amount', e.target.value)} />
            <Button onClick={() => deleteIngredient(i)}>X</Button>
          </Grid>
        ))}
        <Button variant="outlined" style={{ margin: '20px 0' }} onClick={addIngredient}>
          Add ingredient
        </Button>
      </Grid>
      <Grid item>
        <FormElement
          multiline
          rows={3}
          required
          label="recipe"
          name="recipe"
          value={state.recipe}
          onChange={inputChangeHandler}
        />
      </Grid>
      <Grid item xs>
        <FileInput name="image" label="image" onChange={fileChangeHandler} />
      </Grid>
      <Grid item xs>
        <Button type="submit" variant="contained" color="primary">
          Add Cocktail
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewCocktail;
