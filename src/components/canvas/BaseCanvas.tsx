import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "../../styles/canvas.module.scss";
import Ground from "./Ground";

const BaseCanvas = () => {
  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <color attach="background" args={["#3ed8ff"]} />
        <ambientLight />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
        <Ground />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default BaseCanvas;
