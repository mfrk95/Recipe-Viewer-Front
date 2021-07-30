import { makeStyles } from "@material-ui/core/styles";

export const generalStyles = makeStyles((theme) => ({
  textAndButtonContainer: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
  },

  buttonAndSpanContainer: {
    alignSelf: "center",
  },
  spanButton: {
    marginLeft: 30,
    color: "gray",
  },

  addButton: {
    height: 45,
    minWidth: 10,
    width: 50,
    backgroundColor: "rgba(0, 0, 0, 0.13)",
    borderWidth: 0,
    borderRadius: 5,
  },

  modalContainer: {
    position: "absolute",
    top: 200,
    left: 400,
    backgroundColor: "white",
    height: 300,
    width: 500,
  },

  formContainer: {
    display: "flex",
    flexDirection: "row",
  },

  textModal: {
    fontFamily: "Raleway",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  textFieldModal: {
    backgroundColor: "rgba(0, 0, 0, 0.13)",
    borderRadius: 10,
    height: 30,
    marginLeft: 20,
    marginTop: 15,
  },
}));
