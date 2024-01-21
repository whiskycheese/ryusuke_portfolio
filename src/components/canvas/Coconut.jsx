import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import Loader from "../Loader";
import { coconut  } from '../../assets';

const Coconut = (props) => {
  const coconutTexture = useTexture(coconut);
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.2} />
      <directionalLight intensity={2} position={[0, 0, 1]} />      
      <mesh scale={2.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          map={coconutTexture}
          displacementMap={coconutTexture}
          displacementScale={0.1}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const CoconutCanvas = ({ icon }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Coconut imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CoconutCanvas;
