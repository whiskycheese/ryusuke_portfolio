import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Beach = ({ isMobile }) => {
  const beach = useGLTF("./beach/scene.gltf");
  
  return (
    <mesh>
      <ambientLight intensity={2}/>
      <primitive
        object={beach.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -10, -2.2] : [0, -100, -1.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const BeachCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      camera={{ fov: 100 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Beach isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BeachCanvas;
