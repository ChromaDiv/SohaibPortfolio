"use client";

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

function GlassTorus({ theme }: { theme: string | undefined }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.set(t * 0.2, t * 0.2, t * 0.2);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={[2, 0, -2]} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={2} // Reduced for performance
          thickness={1}
          chromaticAberration={0.01} // Reduced
          anisotropy={0.1}
          distortion={0} // Disabled heavy distortion
          distortionScale={0}
          temporalDistortion={0} // Disabled heavy temporal recalculations
          clearcoat={1}
          color={theme === 'light' ? '#ffffff' : '#ffffff'}
          attenuationDistance={theme === 'light' ? 5 : 0.5}
          attenuationColor={theme === 'light' ? '#ffffff' : '#ffffff'}
          transmission={theme === 'light' ? 0.1 : 1}
          opacity={theme === 'light' ? 0.05 : 1}
          transparent={true}
        />
      </mesh>
    </Float>
  );
}

export function BackgroundScene() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-40] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="#10b981" intensity={1} />

        {!isMobile && <GlassTorus theme={theme} />}

        {theme === 'dark' && (
          <Stars radius={100} depth={50} count={2500} factor={3} saturation={0} fade speed={1} />
        )}
      </Canvas>
    </div>
  );
}
