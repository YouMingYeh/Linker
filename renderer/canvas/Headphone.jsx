import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Headphones = () => {
  const headphones = useGLTF("./headphones/scene.gltf");

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <primitive object={headphones.scene} scale={1.5} position-y={-1} rotation-y={0} />
    </Float>
  );
};

const HeadPhonesCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <directionalLight intensity={4} position={[0, 5, 5]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          maxPolarAngle={Math.PI / 1.2}
          minPolarAngle={Math.PI / 2.4}
          enableZoom={false}
        />
        <Headphones />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HeadPhonesCanvas;
