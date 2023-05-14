import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

const Desc1 = styled.div`
  width: 200px;
  padding: 20px;
  color:black;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 10%;
    right: calc(calc(100vw - 240px)/2);
    margin: auto;
  }
`;

const Desc2 = styled.div`
  width: 200px;
  padding: 20px;
  color:black;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 50px;
  left: 100px;

  @media only screen and (max-width: 768px) {
    left: calc(calc(100vw - 240px)/2);
    margin: auto;
    bottom: 0;
  }
`;

const Development = () => {
  return (
    <>
      <Container>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <Atom />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
        <Desc1>
          I design products with a strong focus on both world class design and
          ensuring your product is a market success.
        </Desc1>
        <Desc2>
          I design products with a strong focus on both world class design and
          ensuring your product is a market success.
        </Desc2>
      </Container>
    </>
  );
};

export default Development;
