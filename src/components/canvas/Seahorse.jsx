import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import Loader from "../Loader";

const Seahorse = () => {
  const seahorse = useGLTF("./seahorse/scene.gltf");

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={2} />
      <directionalLight position={[-10, 10, 0]} intensity={4} />
      <primitive object={seahorse.scene} scale={2.5} position-y={0} rotation-y={1} />
    </Float>
  );
};

const SeahorseCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [0, 0, 5],
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
        />
        <Seahorse />
        
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SeahorseCanvas;
