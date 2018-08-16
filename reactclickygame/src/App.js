import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
//import images from "./images.json";

const App = () => (
  <Wrapper>
    <Title>Clicky Game</Title>
    <div>
      <ImageCard></ImageCard>
      </div>
  </Wrapper>
);

export default App;
