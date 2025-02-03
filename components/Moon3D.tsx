import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
const displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";
const worldURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg";

const Moon = () => {
  const moonRef = useRef<THREE.Mesh | null>(null);
  const worldRef = useRef<THREE.Mesh | null>(null);

  const [texture, displacementMap, worldTexture] = useTexture([
    textureURL,
    displacementURL,
    worldURL,
  ]);

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.002;
      moonRef.current.rotation.x += 0.0001;
    }
    if (worldRef.current) {
      worldRef.current.rotation.y += 0.0001;
      worldRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <>
      <mesh ref={moonRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 60, 60]} />
        <meshPhongMaterial
          map={texture}
          displacementMap={displacementMap}
          displacementScale={0.06}
          bumpMap={displacementMap}
          bumpScale={0.04}
          shininess={0}
          reflectivity={0}
        />
      </mesh>

      <mesh ref={worldRef} scale={[-1, 1, 1]}>
        <sphereGeometry args={[100, 120, 120]} />
        <meshBasicMaterial map={worldTexture} side={THREE.BackSide} />
      </mesh>

      <directionalLight color={0xffffff} intensity={1} position={[-100, 10, 50]} />
      <hemisphereLight
        color={new THREE.Color("#ffffff")}
        groundColor={new THREE.Color("#c0c0c0")}
        intensity={0.1}
      />
    </>
  );
};

const ResponsiveCanvas = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
    }
  }, [camera, size]);

  return null;
};

const MoonScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ResponsiveCanvas />
      <OrbitControls enablePan={false} />
      <Moon />
    </Canvas>
  );
};

export default MoonScene;
