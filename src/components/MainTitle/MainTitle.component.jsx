import { Grid, Typography } from "@material-ui/core/";

function MainTitle(props) {
  return (
    <Grid
      style={{
        backgroundImage: `${props.imageBackground}`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 200,
        marginTop: 5,
      }}
    >
      <Typography variant="h1" style={{ fontFamily: "Dancing Script", textAlign: "center", paddingTop: 30 }}>
        {props.title}
      </Typography>
    </Grid>
  );
}

export default MainTitle;
