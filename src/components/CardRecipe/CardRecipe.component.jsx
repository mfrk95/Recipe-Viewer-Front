import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import { generalStyles } from "./CardRecipe.style";

export default function CardRecipe(props) {
  const classes = generalStyles();
  const [showText, setShowText] = React.useState(false);

  return (
    <Grid
      style={{ position: "relative", width: 200 }}
      onMouseEnter={() => {
        setShowText(true);
      }}
      onMouseLeave={() => {
        setShowText(false);
      }}
    >
      <img className={classes.cardStyle} src={props.recipeImage} />
      {showText ? (
        <Typography className={classes.cardTextShow}>
          {props.recipeTitle}
        </Typography>
      ) : null}
    </Grid>
  );
}
