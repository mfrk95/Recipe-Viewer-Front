import { makeStyles } from "@material-ui/core/styles";

export const generalStyles = makeStyles((theme) => ({
  mainContainer: { height: 50, display: "flex", flexDirection: "row", alignItems: "center" },
  firstButton: { marginLeft: 10, marginRight: 10 },
  buttons: { marginRight: 10 },
  roundBorders: { borderRadius: 20 },
  textStyle: { textTransform: "capitalize", fontFamily: "Raleway", fontWeight: "700", color: "gray" },
}));
