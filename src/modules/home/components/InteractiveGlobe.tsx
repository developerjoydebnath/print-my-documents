"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

// Helper to convert lat/lon to 3D position
const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

const GlobeDots = ({ radius = 2 }: { radius?: number }) => {
  const points = useMemo(() => {
    const temp = [];
    const rows = 40; // Latitude steps
    const cols = 80; // Longitude steps

    for (let lat = -90; lat <= 90; lat += 180 / rows) {
      for (let lon = -180; lon <= 180; lon += 360 / cols) {
        // Skip poles to avoid bunching
        if (Math.abs(lat) === 90) continue;

        const pos = latLonToVector3(lat, lon, radius);
        temp.push(pos.x, pos.y, pos.z);
      }
    }
    return new Float32Array(temp);
  }, [radius]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          args={[points, 100]}
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#94a3b8" // slate-400
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const StoreMarker = ({
  position,
  onClick,
}: {
  position: THREE.Vector3;
  onClick: () => void;
}) => {
  const ref = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      // Point the positive Z axis to the center of the globe (0,0,0)
      ref.current.lookAt(0, 0, 0);
    }
  }, [position]);

  return (
    <group
      position={position}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* 
        Since +Z points to center, -Z points to the sky.
        We build the house along the -Z axis.
      */}
      <group>
        {/* Building Body */}
        <mesh position={[0, 0, -0.04]}>
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
        {/* Roof */}
        <mesh position={[0, 0, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.06, 0.06, 4]} />
          <meshStandardMaterial color="#c2410c" />
        </mesh>
        {/* Base/Shadow */}
        <mesh position={[0, 0, -0.005]}>
          <circleGeometry args={[0.06, 16]} />
          <meshBasicMaterial color="#000" opacity={0.2} transparent />
        </mesh>
      </group>
    </group>
  );
};

const StorePopup = ({
  position,
  onClose,
  storeName,
  rating,
}: {
  position: THREE.Vector3;
  onClose: () => void;
  storeName: string;
  rating: number;
}) => {
  return (
    <Html position={position} center zIndexRange={[100, 0]}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
        className="w-40 rounded-lg bg-white p-3 shadow-xl dark:bg-slate-800"
      >
        <div className="mb-1 text-xs font-bold text-slate-900 dark:text-white">
          {storeName}
        </div>
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < rating
                    ? "fill-orange-400 text-orange-400"
                    : "fill-slate-200 text-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-slate-500">
            {rating.toFixed(1)}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px] text-slate-600 hover:bg-slate-300"
        >
          ✕
        </button>
      </motion.div>
    </Html>
  );
};

const GlobeScene = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const earthTexture = useLoader(
    THREE.TextureLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
  );

  // Generate random markers once after mount to keep render pure
  const [markers, setMarkers] = useState<
    { id: number; position: THREE.Vector3; name: string; rating: number }[]
  >([]);

  useEffect(() => {
    const temp: {
      id: number;
      position: THREE.Vector3;
      name: string;
      rating: number;
    }[] = [];
    for (let i = 0; i < 15; i++) {
      const lat = (Math.random() - 0.5) * 140; // Avoid extreme poles
      const lon = (Math.random() - 0.5) * 360;
      temp.push({
        id: i,
        position: latLonToVector3(lat, lon, 2.05), // Slightly above surface
        name: `Print Store ${i + 1}`,
        rating: 3 + Math.random() * 2,
      });
    }
    setMarkers(temp);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Base Sphere (Textured Globe) */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Dots */}
      <GlobeDots radius={2.02} />

      {/* Markers */}
      {markers.map((marker) => (
        <group key={marker.id}>
          <StoreMarker
            position={marker.position}
            onClick={() => setActiveMarker(marker.id)}
          />
          {activeMarker === marker.id && (
            <StorePopup
              position={marker.position}
              storeName={marker.name}
              rating={marker.rating}
              onClose={() => setActiveMarker(null)}
            />
          )}
        </group>
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.2}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
};

export default function InteractiveGlobe() {
  return (
    <div className="h-[400px] w-full cursor-grab active:cursor-grabbing md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <Suspense fallback={null}>
          <GlobeScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
