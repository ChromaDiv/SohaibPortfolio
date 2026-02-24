"use client";

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Line, Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

// 1. Kinetic Orb Component (unchanged)
function KineticOrb({ color, position, size, speed, distort }: { color: string, position: [number, number, number], size: number, speed: number, distort: number }) {
  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          metalness={0.5}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

// 2. Clean, Subtle Atomic Lattice (Kept exactly the same as the ultra-subtle version)
function CleanStructure({ isDark, color }: { isDark: boolean; color: string }) {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes, lineConnections } = useMemo(() => {
    const numNodes = 80;
    const spread = 20;
    const maxDistance = 4.5;

    const nodesArray: THREE.Vector3[] = [];

    for (let i = 0; i < numNodes; i++) {
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread;
      nodesArray.push(new THREE.Vector3(x, y, z));
    }

    const connections: THREE.Vector3[] = [];
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        if (nodesArray[i].distanceTo(nodesArray[j]) < maxDistance) {
          connections.push(nodesArray[i]);
          connections.push(nodesArray[j]);
        }
      }
    }

    return {
      nodes: nodesArray,
      lineConnections: connections,
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* The Connections */}
      <Line
        points={lineConnections}
        color={color}
        lineWidth={1}
        transparent
        // Pushed down to an absolute whisper (5% in dark mode, 8% in light mode)
        opacity={isDark ? 0.05 : 0.08}
        segments={true}
      />

      {/* The Nodes (Spheres) */}
      <Instances range={nodes.length}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          // Dropped down significantly to look like faint glass (12% in dark, 18% in light)
          opacity={isDark ? 0.12 : 0.18}
        />
        {nodes.map((pos, i) => (
          <Instance key={i} position={pos} />
        ))}
      </Instances>
    </group>
  );
}

export function BackgroundScene() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => setMounted(true), []);

  // Colors exactly from your provided snippet
  const colors = useMemo(() => ({
    cyan: "#06b6d4",
    blue: isDark ? "#3b82f6" : "#2563eb",
  }), [isDark]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background/20 dark:bg-background/20 transition-colors duration-1000 overflow-hidden">

      {/* 1. 3D ORBS LAYER (Exactly from your snippet) */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={isDark ? 0.6 : 1.2} />
          <pointLight position={[10, 10, 10]} intensity={2.5} color={colors.blue} />
          <group>
            <KineticOrb color={colors.blue} position={[-5, 3, -4]} size={1.4} speed={1.1} distort={0.35} />
            <KineticOrb color={colors.cyan} position={[4.5, -1, -1]} size={1.8} speed={0.9} distort={0.4} />
          </group>
        </Canvas>
      </div>

      {/* 2. THE BLUR (Exactly from your snippet, acts as a frosted glass layer) */}
      <div className="absolute inset-0 backdrop-blur-[40px] pointer-events-none z-10" />

      {/* 3. CLEAN, SUBTLE LATTICE (Sitting on top of the blur at z-20) */}
      <div className="absolute inset-0 z-20">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 12], fov: 40 }}>
          <group>
            <CleanStructure color={colors.cyan} isDark={isDark} />
          </group>
        </Canvas>
      </div>

      {/* 4. VIGNETTE (Exactly from your snippet) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,var(--background)_110%)] opacity-60 z-30" />

      {/* 5. GRAIN TEXTURE (Exactly from your snippet) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-40 pointer-events-none" />
    </div>
  );
}