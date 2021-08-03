import { makeStyles } from "@material-ui/core/styles";

export const generalStyles = makeStyles((theme) => ({
  cardStyle: {
    width: 240,
    height: 240,
    borderRadius: 10,
    "&:hover": {
      opacity: 0.5,
    },
  },

  cardTextShow: {
    fontFamily: "Open Sans",
    fontSize: 30,
    letterSpacing: 3.25,
    color: "#575757",
    fontStyle: "italic",
    fontWeight: "900",
    userSelect: "none",
    pointerEvents: "none",
    width: 200,
    position: "absolute",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
  },
}));
