import React from "react";
import { Grid, Button, Typography, TextField, Modal } from "@material-ui/core/";
import Menu from "./components/Menu/Menu.component";
import MainTitle from "./components/MainTitle/MainTitle.component";
import TextInput from "./components/TextInput/TextInput.component";
import FeaturedRecipes from "./components/FeaturedRecipes/FeaturedRecipes.component";
import { generalStyles } from "./MainScreen.style";
import CardRecipe from "./components/CardRecipe/CardRecipe.component";

function MainScreen() {
  const [mainTitle, setMainTitle] = React.useState("Recipes");
  const [isModalAddOpen, setIsModalAddOpen] = React.useState(false);
  const [recipeTitle, setRecipeTitle] = React.useState("");
  const [recipeDescription, setRecipeDescription] = React.useState("");
  const [recipeCategory, setRecipeCategory] = React.useState("");

  const [selectedImage, setSelectedImage] = React.useState();
  const [imageBackground, setImageBackground] = React.useState(
    'url("images/mainBackground.png")'
  );
  const classes = generalStyles();

  const handleClickAddRecipe = () => {
    setIsModalAddOpen(true);
  };

  const handleChangeImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const onChangeRecipeTitle = (e) => {
    setRecipeTitle(e.target.value);
  };

  const onChangeRecipeDescription = (e) => {
    setRecipeDescription(e.target.value);
  };

  const onChangeRecipeCategory = (e) => {
    setRecipeCategory(e.target.value);
  };
  const handleClickUploadRecipe = () => {
    const formData = new FormData();
    formData.append("file", selectedImage);
    fetch(
      `http://localhost:8080/recipes/addRecipe?title=${recipeTitle}&description=${recipeDescription}&category=${recipeCategory}`,
      {
        method: "post",
        mode: "no-cors",
        body: formData,
      }
    ).then((resp) => console.log("La respuesta del POST: ", resp));
  };

  const renderContent = () => {
    if (mainTitle === "Recipes") {
      return <FeaturedRecipes />;
    } else if (mainTitle === "Pasta") {
      return (
        <Grid
          xs={12}
          style={{
            marginTop: "3em",
            marginLeft: "4em",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Grid xs={3}>
            <CardRecipe
              recipeTitle="Spaghetti Carbonara"
              recipeImage={
                "https://www.foodiecrush.com/wp-content/uploads/2020/12/Bolognese-foodiecrush.com-023.jpg"
              }
            />
          </Grid>
          <Grid xs={3} style={{}}>
            <CardRecipe
              recipeTitle="Fetuccine Alfredo"
              recipeImage={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTin1_6_0COzKTDupG2rzbveEh1uZNwiNS18Q&usqp=CAU"
              }
            />
          </Grid>
          <Grid xs={3} style={{}}>
            <CardRecipe
              recipeTitle="Potato Gnocci"
              recipeImage={
                "https://i1.wp.com/baketotheroots.de/wp-content/uploads/2021/03/SQ_200706_One-Pot-Gnocchi-with-Italian-Sausage.jpg?fit=1200%2C1200&ssl=1"
              }
            />
          </Grid>
        </Grid>
      );
    }
  };

  React.useEffect(() => {
    fetch("http://localhost:8080/recipesAll?Pasta").then((resp) => {
      resp.json().then((res) => {
        console.log("La respuesta: ", res);
      });
    });
  });

  return (
    <Grid>
      <Menu setTitle={setMainTitle} setImage={setImageBackground} />
      <MainTitle title={mainTitle} imageBackground={imageBackground} />
      <Grid className={classes.textAndButtonContainer}>
        <Grid xs={5}>
          <TextInput />
        </Grid>
      </Grid>
      {renderContent()}

      <Modal
        open={isModalAddOpen}
        onClose={() => {
          setIsModalAddOpen(false);
        }}
      >
        <Grid className={classes.modalContainer}>
          <Grid className={classes.formContainer}>
            <Typography className={classes.textModal}>Titulo:</Typography>
            <TextField
              onChange={onChangeRecipeTitle}
              className={classes.textFieldModal}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid className={classes.formContainer}>
            <Typography className={classes.textModal}>Descripcion:</Typography>
            <TextField
              onChange={onChangeRecipeDescription}
              className={classes.textFieldModal}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid className={classes.formContainer}>
            <Typography className={classes.textModal}>Categoria:</Typography>
            <TextField
              onChange={onChangeRecipeCategory}
              className={classes.textFieldModal}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
          <Grid>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleChangeImageSelect}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                style={{ marginTop: 20, marginLeft: 20 }}
              >
                Select Image
              </Button>
            </label>
            <Button
              onClick={handleClickUploadRecipe}
              style={{ marginLeft: 20, marginTop: 20 }}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </Grid>
  );
}

export default MainScreen;
