"use client";

import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function RobotModel() {
  const floatGroupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/robot.glb");
  const floatTime = useRef(0);

  // Auto-fit: measure bounding box once → derive scale + centering offset
  const { scale, offset } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Fit largest dimension to ~3 world-units (camera z=6, fov 42)
    const s = 3.0 / Math.max(size.x, size.y, size.z);

    return {
      scale: s,
      offset: [-center.x * s, -center.y * s, -center.z * s] as [number, number, number],
    };
  }, [scene]);

  // Enhance materials once after load
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if (mat.isMeshStandardMaterial) {
          mat.envMapIntensity = 1.8;
          mat.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  // Only float — OrbitControls owns rotation
  useFrame((_, delta) => {
    if (!floatGroupRef.current) return;
    floatTime.current += delta * 0.5;
    floatGroupRef.current.position.y = Math.sin(floatTime.current) * 0.08;
  });

  return (
    // Float group: only Y position animated, so OrbitControls rotation is unaffected
    <group ref={floatGroupRef}>
      <group scale={scale} position={offset}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/robot.glb");
