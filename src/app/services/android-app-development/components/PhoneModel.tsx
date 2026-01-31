"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function PhoneModel(props: any) {
  const group = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/Phone (2a) Black 360.glb");

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    // Gentle floating
    group.current.position.y = Math.sin(t * 0.5) * 0.05;
    // Slow sleek rotation
    group.current.rotation.y = Math.sin(t * 0.2) * 0.2 + 3.14;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={22} rotation={[0, -1.27, 0]} position={[0, -2.8, 0]} />
    </group>
  );
}

useGLTF.preload("/Phone (2a) Black 360.glb");
