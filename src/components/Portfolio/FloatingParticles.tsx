import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Mesh } from "three";

const Particle = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<Mesh>(null);
  
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ] as [number, number, number],
    color: [
      "#00BFFF", // Cyan
      "#8A2BE2", // Purple  
      "#00FF7F", // Green
    ][i % 3],
  }));

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          position={particle.position}
          color={particle.color}
        />
      ))}
    </>
  );
};

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ParticleField />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingParticles;