import { Grid, Typography } from "@material-ui/core/";
import MultiCarousel from "../MultiCarousel/MultiCarousel.component";

export default function FeaturedRecipes() {
  return (
    <Grid>
      <Grid
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Typography style={{ fontFamily: "Raleway", fontSize: 20, fontWeight: "bold", color: "gray" }}>
          Featured Recipes
        </Typography>
      </Grid>
      <Grid style={{ display: "flex", justifyContent: "center" }}>
        <Grid xs={8} style={{ marginTop: 30 }}>
          <MultiCarousel />
        </Grid>
      </Grid>
    </Grid>
  );
}
