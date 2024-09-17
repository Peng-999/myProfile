import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./MyAvatar/GalaxyWatch4.glb"); 

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" /> 
      <pointLight intensity={1}/>
      <spotLight
        position={[-10, 50, 10]}
        angle={0.3} 
        penumbra={1}
        intensity={5} 
        castShadow
        shadow-mapSize={1024} 
        decay={false}/>  
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.65}
        position={isMobile ? [0, -5, -0] : [0, -5, -0]}
        rotation={[0, 0.3, 0.05]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Set the initial state
    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [30, 0, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;