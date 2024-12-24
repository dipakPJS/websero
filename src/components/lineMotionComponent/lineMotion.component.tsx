"use client"
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";
import LineMotion from "../../../public/LineMotion";

export default function LineMotionComponent() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls enableRotate={false} enableZoom={false} />
      <Suspense fallback={null}>
        {/* main 3d model */}
        <LineMotion />
      </Suspense>
      <Environment preset="forest" />
    </Canvas>
  );
}
