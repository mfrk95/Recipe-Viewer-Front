import { TextField } from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";

export default function TextInput() {
  return (
    <TextField
      variant="filled"
      placeholder="Find a recipe"
      fullWidth={true}
      inputProps={{
        style: {
          paddingBottom: 25,
          paddingLeft: 20,
          fontSize: 19,
          fontFamily: "Raleway",
          fontWeight: "700",
          color: "black",
        },
      }}
      InputProps={{
        disableUnderline: true,
        style: {
          borderRadius: 30,
          height: 50,
        },
        startAdornment: <SearchIcon />,
      }}
    />
  );
}
