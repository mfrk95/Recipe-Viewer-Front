import React from "react";
import { Grid, Typography, Button, TextField, Modal } from "@material-ui/core/";
import { generalStyles } from "./Menu.style";

function Menu(props) {
  const classes = generalStyles();

  const handleClickHome = () => {
    props.setTitle("Recipes");
    props.setImage('url("images/mainBackground.png")');
  };
  const handleClickPasta = () => {
    props.setTitle("Pasta");
    props.setImage('url("images/pastaBackground.png")');
  };
  const handleClickMeatPoultry = () => {
    props.setTitle("Meat & Poultry");
    props.setImage('url("images/meatPoultryBackground.png")');
  };
  const handleClickSeafood = () => {
    props.setTitle("Seafood");
    props.setImage('url("images/seafoodBackground.png")');
  };
  const handleClickVeggie = () => {
    props.setTitle("Veggie");
    props.setImage('url("images/veggieBackground.png")');
  };
  const handleClickDessert = () => {
    props.setTitle("Dessert");
    props.setImage('url("images/dessertBackground.png")');
  };
  const handleClickBaking = () => {
    props.setTitle("Baking");
    props.setImage('url("images/bakingBackground.png")');
  };

  return (
    <Grid className={classes.mainContainer}>
      <Grid xs={2} className={classes.firstButton}>
        <Button variant="contained" fullWidth={true} className={classes.roundBorders} onClick={handleClickHome}>
          <Typography className={classes.textStyle}>Home</Typography>
        </Button>
      </Grid>
      <Grid xs={2} className={classes.buttons}>
        <Button variant="contained" fullWidth={true} className={classes.roundBorders} onClick={handleClickPasta}>
          <Typography className={classes.textStyle}>Pasta</Typography>
        </Button>
      </Grid>
      <Grid xs={2} className={classes.buttons}>
        <Button variant="contained" fullWidth={true} className={classes.roundBorders} onClick={handleClickMeatPoultry}>
          <Typography className={classes.textStyle}>Meat & Poultry</Typography>
        </Button>
      </Grid>
      <Grid xs={2} className={classes.buttons}>
        <Button variant="contained" fullWidth={true} className={classes.roundBorders} onClick={handleClickSeafood}>
          <Typography className={classes.textStyle}>Seafood</Typography>
        </Button>
      </Grid>
      <Grid xs={2} className={classes.buttons}>
        <Button variant="contained" fullWidth={true} className={classes.roundBorders} onClick={handleClickVeggie}>
          <Typography className={classes.textStyle}>Veggie</Typography>
        </Button>
      </Grid>
      <Grid xs={2} className={classes.buttons}>
        <Button variant="contained" fullWidth={true} className={classes.roundBorders} onClick={handleClickDessert}>
          <Typography className={classes.textStyle}>Dessert</Typography>
        </Button>
      </Grid>
      <Grid xs={2} className={classes.buttons}>
        <Button variant="contained" fullWidth={true} className={classes.roundBorders} onClick={handleClickBaking}>
          <Typography className={classes.textStyle}>Baking</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Menu;
