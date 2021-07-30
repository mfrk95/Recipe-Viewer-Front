import { Grid } from "@material-ui/core/";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MultiCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      showDots={false}
      infinite={true}
      autoPlay={true}
      transitionDuration={1000}
      removeArrowOnDeviceType={"desktop"}
    >
      <Grid>
        <img
          style={{ width: 200, height: 200, borderRadius: 10 }}
          src="https://www.foodiecrush.com/wp-content/uploads/2020/12/Bolognese-foodiecrush.com-023.jpg"
        />
      </Grid>
      <Grid>
        <img
          style={{ width: 200, height: 200, borderRadius: 10 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTin1_6_0COzKTDupG2rzbveEh1uZNwiNS18Q&usqp=CAU"
        />
      </Grid>
      <Grid>
        <img
          style={{ width: 200, height: 200, borderRadius: 10 }}
          src="https://www.noracooks.com/wp-content/uploads/2018/11/square-1.jpg"
        />
      </Grid>
      <Grid>
        <img
          style={{ width: 200, height: 200, borderRadius: 10 }}
          src="https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg"
        />
      </Grid>
      <Grid>
        <img
          style={{ width: 200, height: 200, borderRadius: 10 }}
          src="https://www.jocooks.com/wp-content/uploads/2020/02/gnocchi-recipe-1-18.jpg"
        />
      </Grid>
    </Carousel>
  );
}
