"use client";

import React, { useRef, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Stars, PerspectiveCamera, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';



// --- CONFIGURATION ---
const EARTH_RADIUS = 2;
const RAJASTHAN_COORDS = { lat: 26.9, lon: 75.8 }; // Jaipur/Rajasthan Coordinates

// Helper: Convert Lat/Lon to Vector3 on the sphere
function getPositionFromLatLon(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180); // Adjust for texture offset (usually +180 or -90 depending on source)

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
}

// --- SHADERS (Atmosphere) ---
const atmosphereVertexShader = `
varying vec3 vNormal;
void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const atmosphereFragmentShader = `
varying vec3 vNormal;
void main() {
    float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity * 1.5;
}
`;

// --- EARTH COMPONENT ---
// Receives a ref to allow the parent (CameraRig) to control rotation if needed
function Earth({ earthGroupRef }: { earthGroupRef: React.MutableRefObject<THREE.Group> }) {
  const cloudsRef = useRef<THREE.Mesh>(null!);

  // Textures
  const [colorMap, bumpMap, specMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png",
  ]);

  useFrame((state, delta) => {
    // Independent Cloud Rotation (The earth itself is rotated by the scroll rig)
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <group ref={earthGroupRef} rotation={[0, 0, 0]}>
      {/* 1. Base Earth Sphere */}
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={bumpMap}
          specularMap={specMap}
          shininess={15}
          emissive={new THREE.Color(0x112244)}
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* 2. Clouds Layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[EARTH_RADIUS + 0.02, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 3. Atmosphere Glow */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>


    </group>
  );
}

// --- CAMERA & ANIMATION CONTROLLER ---
function CameraRig({ earthGroupRef }: { earthGroupRef: React.MutableRefObject<THREE.Group> }) {
  const { camera } = useThree();

  useFrame((state) => {
    // CONSTANT SLOW ROTATION
    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y += 0.001; // Very slow drift
    }

    // Mouse Parallax (Subtle) around a BASE offset
    // The user wants the Earth on the RIGHT, so camera must be on the LEFT (negative X).
    const BASE_X = -2;
    const { x, y } = state.pointer;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, BASE_X + (x * 0.9), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, y * 0.9, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// --- MAIN PAGE COMPONENT ---
export default function PortfolioPage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroPointerEvents = useTransform(scrollY, (y) => y > 100 ? "none" : "auto");
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  // We need a ref to the Earth group to share between the Earth component and the Camera Rig
  const earthGroupRef = useRef<THREE.Group>(null!);

  return (
    <main className="relative w-full bg-black min-h-screen font-sans selection:bg-orange-500/30">

      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas shadows gl={{ antialias: true }} dpr={[1, 2]}>
          <Suspense fallback={<Html center className="text-white tracking-widest uppercase text-sm">Loading Experience...</Html>}>
            {/* Moving camera to negative X shifts the view so Earth (at 0,0,0) appears on the RIGHT */}
            <PerspectiveCamera makeDefault position={[-6, 0, 6]} fov={60} />
            <Stars radius={300} depth={50} count={10000} factor={4} saturation={0} fade speed={1} />

            <ambientLight intensity={0.05} />
            <directionalLight position={[5, 3, 5]} intensity={3.5} color="#ffdcb4" />
            <pointLight position={[-10, -5, -10]} intensity={1.0} color="#0040ff" />

            {/* Earth with Ref passed down */}
            <Earth earthGroupRef={earthGroupRef} />

            {/* Controller for Animations */}
            <CameraRig earthGroupRef={earthGroupRef} />

          </Suspense>
        </Canvas>
      </div>

      {/* Navbar Matrix-Layer */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 pointer-events-none mix-blend-difference">
        <div className="text-white font-bold text-xl tracking-widest pointer-events-auto">PORTFOLIO</div>
        <div className="hidden md:flex gap-8 text-sm text-gray-300 uppercase tracking-widest pointer-events-auto">
          <Link href="/portfolio" className="hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </nav>

      {/* SCROLLABLE CONTENT */}
      {/* Set pointer-events-none on the container so we can interact with canvas if needed, though we disabled OrbitControls for the Zoom effect */}
      <div className="relative z-10 w-full pointer-events-none">

        {/* SECTION 1: HERO */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY, pointerEvents: heroPointerEvents as any }}
          className="h-screen w-full flex flex-col justify-center items-start px-8 md:px-20"
        >
          <div className="max-w-5xl text-center mx-auto">
            <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter text-center uppercase drop-shadow-2xl">
              Camlenio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Software
              </span>
            </h1>
            <p className="text-white/80 mt-8 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-white/10">
              <strong>Camlenio Software Pvt. Ltd.</strong> — Architecting scalable digital ecosystems <br className="hidden md:block" /> and enterprise solutions for a global audience.
            </p>
          </div>

          <div className="absolute bottom-12 animate-bounce text-white opacity-40">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </motion.div>

        {/* SECTION 2: PROJECTS */}
        <div className="relative min-h-screen w-full flex flex-col items-center pt-24 px-6 pb-24 pointer-events-auto z-20">
          <div className="max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Selected Works</h2>
              <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full" />
              <p className="mt-6 text-xl text-white/60 max-w-2xl mx-auto">
                We build digital ecosystems that redefine industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-20">
              <ProjectCard
                index={0}
                title="Fintech Admin Portal"
                tech="Next.js + Tailwind + Node.js"
                description="A unified back-office portal handling high-volume transactions, settlements, and KYC with enterprise-grade security."
                image="/adminpannel.jpg"
              />
              <ProjectCard
                index={1}
                title="Hotel Management Suite"
                tech="React + Python + PostgreSQL"
                description="Everything a hotel needs: Booking engine, inventory management, and guest services in one seamless dashboard."
                image="/luxury-hotel-hero.png"
              />
              <ProjectCard
                index={2}
                title="Real Estate Intelligence"
                tech="Next.js + Three.js + AI"
                description="Interactive property showcases with 3D virtual tours and AI-driven market analysis for investors."
                image="/real_estate_hero.webp"
              />
              <ProjectCard
                index={3}
                title="Camlenio Corporate"
                tech="Next.js 14 + R3F + Framer Motion"
                description="Our own digital headquarters. pushing the boundaries of web performance and 3D interactivity."
                image="/hero-city.webp"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-12 text-center transform hover:scale-[1.01] transition-transform duration-500 shadow-2xl shadow-orange-500/20"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Something Extraordinary?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Your vision deserves world-class execution. Let's discuss how we can bring your ideas to life.
              </p>
              <Link href="/contact" className="inline-block bg-white text-orange-600 hover:bg-black hover:text-white transition-colors px-8 py-4 rounded-full text-lg font-bold shadow-lg">
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Hide Global Footer */}
      <style dangerouslySetInnerHTML={{ __html: `footer { display: none !important; }` }} />
    </main>
  );
}

// Reuse Project Card
const ProjectCard = ({ title, tech, description, image, index }: { title: string, tech: string, description: string, image: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] flex flex-col"
  >
    <div className="aspect-video bg-neutral-800 relative overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
    </div>

    {/* <div className="p-8 relative z-10 flex-grow flex flex-col justify-end">
      <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">{title}</h3>
      <p className="text-orange-400 text-sm font-medium mb-3 uppercase tracking-wider">{tech}</p>
      <p className="text-white/70 font-light leading-relaxed mb-6 group-hover:text-white/90 transition-colors">
        {description}
      </p>

      <div className="mt-auto">
        <span className="inline-flex items-center text-sm font-bold text-white group-hover:underline decoration-orange-500 underline-offset-4">
          View Case Study <span className="ml-2">→</span>
        </span>
      </div>
    </div> */}
  </motion.div>
);
