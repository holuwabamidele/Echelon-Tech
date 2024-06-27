import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import tech1 from "../assets/tech1.jpg";
import tech2 from "../assets/tech2.jpg";
import tech3 from "../assets/tech3.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Div className="slider-container">
      <Slider {...settings}>
        <Slide>
          <img src={tech1} alt="" />
        </Slide>
        <Slide>
          <img src={tech2} alt="" />
        </Slide>
        <Slide>
          <img src={tech3} alt="" />
        </Slide>
      </Slider>
    </Div>
  );
};

export default Carousel;

const Div = styled.div``;

const Slide = styled.div`
  height: 250px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
