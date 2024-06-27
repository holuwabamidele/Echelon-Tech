import HomeCardBlock from "../components/block/HomeCardBlock";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.jpg";
import logo from "../assets/react.svg";
import styled from "styled-components";
import Carousel from "../components/Carousel";

const HomePage = () => {
  return (
    <Container>
      <CarouselHolder>
        <Carousel />
      </CarouselHolder>

      <Holder>
        <HomeCardBlock
          logo={`${logo}`}
          title="Tell me you are a junior developer without telling me you are a junior developer"
          date={"12 Jun"}
          time={6}
          image={`${image1}`}
          votenum={28}
          comments={6}
          bookmarks={9}
        />
        <HomeCardBlock
          logo={`${logo}`}
          title="Switch to the best choice to suceed"
          date={"1 Jun"}
          time={16}
          image={`${image2}`}
          votenum={60}
          comments={16}
          bookmarks={23}
        />
        <HomeCardBlock
          logo={`${logo}`}
          title="Do you think you have what it takes?"
          date={"17 Jun"}
          time={36}
          image={`${image3}`}
          votenum={23}
          comments={26}
          bookmarks={39}
        />
      </Holder>
    </Container>
  );
};
export default HomePage;

const Container = styled.div``;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  /* @media (max-width: 350px) {
    display: flex;
    flex-direction: column;
  } */
`;

const CarouselHolder = styled.div`
  margin-top: 50px;
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
`;
